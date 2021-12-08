import {FunctionComponent, useState} from "react";
import {useLocation} from "react-router-dom";
import {Card, Col, Container, Image, Row, Table} from "react-bootstrap";
import MenuItem from "../models/MenuItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe, faPhone} from "@fortawesome/free-solid-svg-icons";

type TruckDetailProps = {

}

export const TruckDetail : FunctionComponent<TruckDetailProps> = (props) => {
    const location = useLocation();
    const [foodTruck, setFoodTruck] = useState(location.state.foodTruck);

    const getTable = foodTruck.menu.map((item: MenuItem) => (
        <tr>
            <td>{item.name}</td>
            <td>${item.price}</td>
        </tr>
    ));

    return (
        <Container className='my-4' style={{backgroundColor: '#EEE'}}>
            <Row>
                <Col className='text-center my-2'>
                    <h2 className='fw-bold'>{foodTruck.name}</h2>
                    <h6>{foodTruck.address}</h6>
                </Col>
            </Row>
            <Row className='my-2 justify-content-center'>
                <Col md='auto'>
                    <Image src={foodTruck.imageURL} rounded />
                </Col>
            </Row>
            <Row className='justify-content-center my-3'>
                <Col md='auto'>
                    <Card>
                        <Card.Body>
                            <Card.Title>Contact Info</Card.Title>
                            <Card.Text>
                                <FontAwesomeIcon icon={faGlobe} />: <a href={foodTruck.website}>{foodTruck.website}</a><br />
                                <FontAwesomeIcon icon={faPhone} />: {foodTruck.phone}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className='text-center'>
                    <h4>Menu</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                        {getTable}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}