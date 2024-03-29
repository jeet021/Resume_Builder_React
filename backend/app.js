const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const cors = require("cors");
const mongos = require("mongoose");
const pdfTemplate = require("./documents");
const StudentModel = require("./model/student");
const contactUsModel = require("./model/contactus");
const feedbackModel = require("./model/feedback");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/create-pdf", (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
});

app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});

app.use(express.json());
app.use(cors());

mongos.connect("mongodb://127.0.0.1:27017/student");

app.post("/register", (req, res) => {
  StudentModel.create(req.body)
    .then((student) => res.json(student))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  StudentModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("Password or UserEmail is Not Correct : Error");
        }
      } else {
        res.json("email is not exists");
      }
    })
    .catch((err) => console.log(err));
});

app.post("/addcontactdata", (req, res) => {
  contactUsModel
    .create(req.body)
    .then((student) => res.json(student))
    .catch((err) => res.json(err));
});

app.post("/addfeedbackdata", (req, res) => {
  feedbackModel
    .create(req.body)
    .then((student) => res.json(student))
    .catch((err) => res.json(err));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
