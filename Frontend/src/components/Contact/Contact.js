import React from "react";
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import ContactImg from "../../Assets/Contact.svg"
import ContactForm from "./ContactForm";

function Contact() {
    return (
        <section>
            <Container fluid className="contact-section" id="contact">
                <Particle />
                <Row>
                    <h1 style={{ fontSize: "2.1em" }}>
                        React Out to <strong className="purple">Me</strong>
                    </h1>
                    <Col
                        md={6}
                        style={{
                            marginLeft: "50px",
                            justifyContent: "center",
                            paddingTop: "20px",
                            paddingBottom: "50px",
                        }}
                    >
                        <ContactForm />
                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <img
                            src={ContactImg}
                            alt="Contact"
                            className="img-fluid"
                            style={{ maxHeight: "450px" }}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;