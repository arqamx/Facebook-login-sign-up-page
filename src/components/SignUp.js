import { Container, Row, Col, Stack, Image, Card, Form, Button, Alert } from 'react-bootstrap';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        surname: '',
        dateOfBirth: '',
        gender: 'Female',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (error) {
            // Clear any previous error messages
            setError(null);
        }

        // Basic validation
        if (!/^[a-zA-Z]+$/.test(formData.firstName) || !/^[a-zA-Z]+$/.test(formData.surname)) {
            setError('First name and surname must contain only alphabets.');
            return;
        }

        const today = new Date();
        const birthDate = new Date(formData.dateOfBirth);
        const age = today.getFullYear() - birthDate.getFullYear();

        if (age < 9 || age > 130) {
            setError('Age must be between 9 and 130 years.');
            return;
        }

        // Add more validation for password (e.g., minimum length, special characters)
        if (formData.password.length < 8 || !/[!@#$%^&*()_+-]/.test(formData.password)) {
            setError('Password must be at least 8 characters long and contain at least one special character.');
            return;
        }

        // Handle form submission logic here (e.g., send data to server)
        console.log(formData);
    };


    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Stack gap={0} style={{ width: '432px' }}>
                        <div className="p-0 d-flex justify-content-center align-items-center" style={{ marginTop: '10px' }} >
                            <Image src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" fluid style={{ width: '302px' }} />
                        </div>
                        <div className="p-2">
                            <Card >
                                <Card.Body>
                                    <Card.Title className='d-flex justify-content-center align-items-center mt-2 mb-4'>Create a new account</Card.Title>
                                    <Form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col style={{ paddingRight: '5px' }}><Form.Control required size="lg" type="text" name='firstName' placeholder="First name" value={formData.firstName} onChange={handleChange} /></Col>
                                            <Col style={{ paddingLeft: '5px' }}><Form.Control required size="lg" type="text" name='surname' placeholder="Surname" value={formData.surname} onChange={handleChange} /></Col>
                                        </Row>
                                        <Form.Control required size="lg" type="date" name="dateOfBirth" className='mt-4 mb-4' value={formData.dateOfBirth} onChange={handleChange} />
                                        <Form.Select required size="lg" name="gender" value={formData.gender} onChange={handleChange}>
                                            <option>Female</option>
                                            <option>Male</option>
                                            <option>Prefer not to say</option>
                                        </Form.Select >
                                        <Form.Control required size="lg" type="email" name="email" placeholder="Email address" className='mt-4 mb-4' value={formData.email} onChange={handleChange} />
                                        <Form.Control required size="lg" type="password" name='password' placeholder="New Password" className='mt-4 mb-4' value={formData.password} onChange={handleChange} />
                                        {error && (
                                            <Alert variant="danger">
                                                {error}
                                            </Alert>
                                        )}
                                        <Button size="lg" className="w-100 mb-3" variant="primary" type="submit" >Sign Up</Button>
                                    </Form>
                                    <Link to="/" className='d-flex justify-content-center align-items-center text-decoration-none hover:text-decoration-underline'>Already have an account?</Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
}

export default SignUp;