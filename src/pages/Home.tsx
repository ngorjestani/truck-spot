import {FunctionComponent} from "react";
import {Button, Col, Container, Form, Image, InputGroup, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

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
            <Row className='mt-5'>
                <Col xs={{span: 10, offset: 1}} md={{span: 8, offset: 2}}>
                    <Form.Group>
                        <InputGroup>
                            <Form.Control type='input' placeholder='Search...' className='rounded-pill' />
                            <Button><FontAwesomeIcon icon={faSearch} /></Button>
                        </InputGroup>

                    </Form.Group>
                </Col>
            </Row>
        </Container>
    )
}