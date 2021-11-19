import {FunctionComponent} from "react";
import {Col, Container, Form, Image, Row} from "react-bootstrap";

type HomeProps = {

}

export const Home : FunctionComponent<HomeProps> = (props) => {
    return (
        <Container fluid>
            <Row className='mt-4'>
                <Col xs={{span: 8, offset: 2}} md={{span: 4, offset: 4}}>
                    <Image src='./logo.svg' width='100%' fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Control type='input' placeholder='Search...' className='rounded-pill' />
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    )
}