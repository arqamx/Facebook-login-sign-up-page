import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Stack from 'react-bootstrap/Stack';

function SignIn() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Stack gap={3}>
                        <div className="p-2">Logo Image goes here</div>
                        <div className="p-2">Login form goes here</div>
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
}

export default SignIn;