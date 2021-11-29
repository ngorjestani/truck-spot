import {FunctionComponent} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {AddTruckForm} from "../components/AddTruckForm";

type AddTruckProps = {

}

export const AddTruck : FunctionComponent<AddTruckProps> = (props) => {
    return (
        <Container fluid>
            <Row className='mt-4'>
                <Col xs={{span: 4, offset: 4}} md={{span: 2, offset: 5}}>
                    <Image src='./logo.svg' width='100%' fluid />
                </Col>
            </Row>
            <Row>
                <Col xs={{span: 6, offset: 3}} className='mt-4'>
                    <h2 className='text-center fw-bold'>Add a truck</h2>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col md={{span: 8, offset: 2}}>
                    <AddTruckForm />
                </Col>
            </Row>
        </Container>
    )
}