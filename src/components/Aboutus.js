import React from "react";
import "../css/style.css";
function AboutUsContent() {
  return (
    <div className="about-us">
      <div className="container">
        <div className="content">
          <h2>About Us</h2>
          <div className="image-container"></div>
          <p>
            Welcome to our Resume Builder website! We are a team of dedicated
            professionals passionate about helping you create the perfect resume
            to showcase your skills and experiences.
          </p>
          <p>
            Our mission is to simplify the resume-building process and empower
            you to present yourself effectively in the competitive job market.
            Whether you are a seasoned professional or a recent graduate, our
            user-friendly interface and customizable templates will guide you
            through the process.
          </p>
          <p>
            At Resume Builder, we understand the importance of a well-crafted
            resume in making a positive first impression. We believe that
            everyone deserves a resume that highlights their unique strengths
            and achievements.
          </p>
          <p>
            Thank you for choosing Resume Builder to assist you in your career
            journey. We are excited to be a part of your success story!
          </p>
          {/* Testimonials Section */}
          <div className="testimonials">
            <h3>Testimonials</h3>
            <div className="testimonial">
              <p>
                "I got my dream job thanks to Resume Builder. Highly
                recommended!"
              </p>
              <span>- Arman Nagariya, Software Engineer</span>
            </div>
            <div className="testimonial">
              <p>
                "Easy to use and professional-looking resume. Great service!"
              </p>
              <span>- Faizan Khimani, Marketing Specialist</span>
            </div>
          </div>
          {/* Team Members Section */}
          <h3>Meet Our Team</h3>

          <div className="team-members">
            <table style={{ position: "relative", right: "100px" }}>
              <tr>
                <th>
                  <div className="team-member1"></div>
                  <br />
                </th>
              </tr>
              <tr>
                <td>
                  <div className="team-description">
                    <a href="https://www.linkedin.com/in/dhwaj-shah/">
                      <h4>Dhwaj Shah</h4>
                    </a>
                    <p>Founder & Lead Developer</p>
                  </div>
                </td>
              </tr>
            </table>
            <table style={{ position: "relative", right: "65px" }}>
              <tr>
                <th>
                  <div className="team-member2"></div>
                  <br />
                </th>
              </tr>
              <tr>
                <td>
                  <div className="team-description">
                    <a href="https://www.linkedin.com/in/jeetjani/">
                      <h4>Jeet Jani</h4>
                    </a>
                    <p>Tester</p>
                  </div>
                </td>
              </tr>
            </table>

            <table className="testing">
              <tr>
                <th>
                  <div className="team-member3"></div>
                  <br />
                </th>
              </tr>
              <tr>
                <td>
                  <div className="team-description">
                    <a href="https://www.linkedin.com/in/harsh-tanna-software-developer/">
                      <h4>Harsh Tanna</h4>
                    </a>
                    <p>Project Manager</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsContent;
