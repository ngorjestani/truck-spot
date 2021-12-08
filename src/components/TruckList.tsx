import {FunctionComponent, useEffect, useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {db} from "../config/firebaseConfig";
import FoodTruck from "../models/FoodTruck";
import {TruckListItem} from "./TruckListItem";
import {nanoid} from "nanoid";

type TruckListProps = {

}

export const TruckList : FunctionComponent<TruckListProps> = (props) => {
    const [trucks, setTrucks] = useState<FoodTruck[]>([]);
    const getListOfTrucksFromFirebase = async () => {
        const response = db.collection(FoodTruck.collectionName);
        const data = await response
            .withConverter(FoodTruck.firebaseConverter)
            .get();
        data.docs.forEach((doc) => {
            // console.log(doc.data());
            setTrucks((prevState) => {
                return [...prevState, doc.data()];
            })
            console.log(trucks[0]);
        });
    };
    useEffect(() => {
        getListOfTrucksFromFirebase();
    }, []);

    const getCards = trucks.map(truck => (
        <Col key={nanoid(5)} className='my-2 mx-1' md={5} xl={3}>
            <TruckListItem truck={truck} />
        </Col>
    ));

    return (
        <Container>
            <Row>
                {getCards}
            </Row>
        </Container>
    )
}