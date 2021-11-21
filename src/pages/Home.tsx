import {FunctionComponent} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {Search} from "../components/Search";

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
                    <Search />
                </Col>
            </Row>
        </Container>
    )
}