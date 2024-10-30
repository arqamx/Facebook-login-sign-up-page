import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Stack from 'react-bootstrap/Stack';

import Image from 'react-bootstrap/Image';

function SignIn() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Stack gap={5} style={{width: '396px'}}>
                        <div className="p-2 d-flex justify-content-center align-items-center" ><Image src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" fluid className="w-50" /></div>
                        <div className="p-2">Login form goes here</div>
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
}

export default SignIn;