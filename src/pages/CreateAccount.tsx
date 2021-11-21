import {FunctionComponent} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {CreateAccountForm} from "../components/CreateAccountForm";

type CreateAccountProps = {

}

export const CreateAccount : FunctionComponent<CreateAccountProps> = (props) => {
    return (
        <Container fluid>
            <Row className='mt-4'>
                <Col xs={{span: 4, offset: 4}} md={{span: 2, offset: 5}}>
                    <Image src='./logo.svg' width='100%' fluid />
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col md={{span: 8, offset: 2}}>
                    <CreateAccountForm />
                </Col>
            </Row>
        </Container>
    )
}