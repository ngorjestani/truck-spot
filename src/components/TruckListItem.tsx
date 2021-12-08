import {FunctionComponent} from "react";
import FoodTruck from "../models/FoodTruck";
import {Card} from "react-bootstrap";

type TruckListItemProps = {
    truck: FoodTruck,
}

export const TruckListItem : FunctionComponent<TruckListItemProps> = ({truck}) => {
    return (
        <Card style={{width: '20rem'}}>
            <Card.Img variant='top' src={truck.imageURL} />
            <Card.Body>
                <Card.Title>{truck.name}</Card.Title>
                <Card.Text>
                    {truck.address}<br />
                    Cuisine: {truck.cuisine}<br />
                    Phone: {truck.phone}<br />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}