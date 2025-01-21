import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kushagra Saxena </span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br />
            I am currently working as a Software Engineer at Itmtb Technologies.
            <br />
            I have completed my Bachelors (B.Tech) in CSE from<br /> 
            G.L. Bajaj Institute of Technology & Management, Greater Noida.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Those who can't remember the past are condemned to repeat it."{" "}
          </p>
          <footer className="blockquote-footer">Dynamic Programming</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
