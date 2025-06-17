import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";
import { SiGithub } from "react-icons/si";

function Github() {
  const exampleTheme = {
    light: [
      'rgb(235, 235, 235)',
      'rgba(192, 132, 245, 0.44)',
      'rgba(192, 132, 245, 0.6)',
      'rgba(192, 132, 245, 0.76)',
      'rgba(192, 132, 245, 0.92)',
    ],
    dark: [
      'rgb(235, 235, 235)',
      'rgba(192, 132, 245, 0.44)',
      'rgba(192, 132, 245, 0.6)',
      'rgba(192, 132, 245, 0.76)',
      'rgba(192, 132, 245, 0.92)',
    ],
  }
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Commit</strong> <SiGithub />
      </h1>
      <GitHubCalendar
        username="kushagra0426"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        color="#c084f5"
        // theme={exampleTheme} // Optional: A custom theme object to style the calendar
        // style={{ maxWidth: '1100px' }} // Optional: Inline styles for the calendar container
      />
    </Row>
  );
}

export default Github;
