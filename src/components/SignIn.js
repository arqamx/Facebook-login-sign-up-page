import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignIn() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Stack gap={0} style={{ width: '396px' }}>
                        <div className="p-0 d-flex justify-content-center align-items-center" style={{ marginTop: '50px' }} >
                            <Image src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" fluid style={{ width: '240px' }} />
                        </div>
                        <div className="p-2">
                            <Card >
                                <Card.Body>
                                    <Card.Title className='d-flex justify-content-center align-items-center mt-2 mb-4'>Log in to Facebook</Card.Title>
                                    <Form>
                                        <Form.Control size="lg" type="email" placeholder="Enter email" />
                                        <Form.Control size="lg" type="password" placeholder="Password" className='mt-4 mb-4' />
                                        <Button size="lg" className="w-100 mb-3" variant="primary" type="submit" >Log in</Button>
                                    </Form>
                                    <Card.Link href="#" className='d-flex justify-content-center align-items-center text-decoration-none hover:text-decoration-underline'>Sign up for Facebook</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
}

export default SignIn;