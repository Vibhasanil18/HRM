import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container style={containerStyle}>
      <Row>
        {/* Hero Section */}
        <Col md={12} className="text-center mb-5">
          <Card style={heroCardStyle}>
            <Card.Body>
              <h1 style={heroTitleStyle}>Welcome to the HRM System</h1>
              <p style={heroSubtitleStyle}>Your central hub for managing employee tasks, attendance, payroll, and more.</p>
              <Button style={heroButtonStyle} href="/employees">
                Manage Employees
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        {/* Feature Sections */}
        <Col md={4} className="mb-4">
          <Card style={featureCardStyle}>
            <Card.Body>
              <h3 style={featureTitleStyle}>Employee Management</h3>
              <p>View, edit, and manage employee details with ease.</p>
              <Button href="/employees" variant="outline-primary"  style={{
        background: 'linear-gradient(to right,rgb(54, 47, 159),rgb(10, 5, 79))', 
        color: 'white', 
        padding: '10px 20px', 
        borderRadius: '5px', 
        fontSize: '1.1rem', 
        fontWeight: 'bold', 
        border: '2px solid #2575fc', 
        transition: 'all 0.3s ease', 
      }}>Explore</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card style={featureCardStyle}>
            <Card.Body>
              <h3 style={featureTitleStyle}>Attendance</h3>
              <p>Track and manage employee attendance records.</p>
              <Button href="/attendance" variant="outline-primary"  style={{
        background: 'linear-gradient(to right,rgb(54, 47, 159),rgb(10, 5, 79))', 
         // Gradient background
        color: 'white', 
        padding: '10px 20px', 
        borderRadius: '5px', 
        fontSize: '1.1rem', 
        fontWeight: 'bold', 
        border: '2px solid #2575fc', 
        transition: 'all 0.3s ease', 
      }}>Explore</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card style={featureCardStyle}>
            <Card.Body>
              <h3 style={featureTitleStyle}>Payroll</h3>
              <p>View and manage payroll details for all employees.</p>
              <Button href="/payroll" variant="outline-primary"  style={{
        background: 'linear-gradient(to right,rgb(54, 47, 159),rgb(10, 5, 79))', 
        color: 'white', 
        padding: '10px 20px', 
        borderRadius: '5px', 
        fontSize: '1.1rem', 
        fontWeight: 'bold', 
        border: '2px solid #2575fc', 
        transition: 'all 0.3s ease', 
      }}>Explore</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

// Inline styles for the components
const containerStyle = {
  paddingTop: '50px',
  paddingBottom: '50px',
};

const heroCardStyle = {
  background: 'linear-gradient(to right, #afcb11, #2575fc)', 
  color: '#fff',
  borderRadius: '15px',
  padding: '30px',
};

const heroTitleStyle = {
  fontSize: '3rem',
  fontWeight: 'bold',
};

const heroSubtitleStyle = {
  fontSize: '1.2rem',
  marginBottom: '20px',
};

const heroButtonStyle = {
  background: 'linear-gradient(to right,rgb(60, 19, 170),rgb(11, 3, 46))', 
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  fontSize: '1rem',
  cursor: 'pointer',
};

const featureCardStyle = {
  border: 'none',
  color: '#fff',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  textAlign: 'center',
  background: 'linear-gradient(to right,rgb(105, 72, 197),rgb(32, 170, 170))', 
};

const featureTitleStyle = {
  fontSize: '1.8rem',
  fontWeight: '600',
  marginBottom: '15px',
};

export default Dashboard;
