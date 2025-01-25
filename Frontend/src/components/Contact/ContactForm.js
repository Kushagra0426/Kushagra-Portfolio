import React, { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { Form, Button, Container, Card, Modal } from 'react-bootstrap';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.target);
    
    try {
      const response = await fetch('https://portfolio-jowj.onrender.com/api/contact-me/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (response.status === 200) {
        setShowSuccessModal(true);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <>
      <Container className="py-5">
        <Card className="shadow-sm">
          <Card.Body className="p-4">
            <Card.Title className="text-center purple"><b>Please fill this form</b></Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  required
                  placeholder="Your message"
                />
              </Form.Group>

              <Button 
                variant="primary"
                type="submit"
                className="w-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>

      <Modal 
        show={showSuccessModal} 
        onHide={handleCloseModal} 
        centered
        backdrop="static"
      >
        <Modal.Body className="text-center">
          <div className="mb-3">
            <FaCheckCircle className="text-success" style={{ fontSize: '4rem' }} />
          </div>
          <h4>Thanks for your message!</h4>
          <p className="text-muted">I will get back to you soon.</p>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContactForm;