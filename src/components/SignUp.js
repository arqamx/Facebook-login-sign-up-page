import { Container, Row, Col, Stack, Image, Card, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



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
                                    <Form>
                                        <Row>
                                            <Col style={{ paddingRight: '5px' }}><Form.Control size="lg" type="text" name='firstName' placeholder="First name" /></Col>
                                            <Col style={{ paddingLeft: '5px' }}><Form.Control size="lg" type="text" name='surname' placeholder="Surname" /></Col>
                                        </Row>
                                        <Form.Control size="lg" type="date" name="dateOfBirth"  className='mt-4 mb-4'/>
                                        <Form.Select  size="lg" name="gender">
                                            <option>Female</option>
                                            <option>Male</option>
                                            <option>Prefer not to say</option>
                                        </Form.Select>
                                        <Form.Control size="lg" type="email" placeholder="Email address" className='mt-4 mb-4' />
                                        <Form.Control size="lg" type="password" placeholder="New Password" className='mt-4 mb-4' />
                                        <Button size="lg" className="w-100 mb-3" variant="primary" type="submit" >Sign Up</Button>
                                    </Form>
                                    <Card.Link href="#" className='d-flex justify-content-center align-items-center text-decoration-none hover:text-decoration-underline'>Already have an account?</Card.Link>
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