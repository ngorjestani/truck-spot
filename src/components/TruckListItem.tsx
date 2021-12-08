import {FunctionComponent} from "react";
import FoodTruck from "../models/FoodTruck";
import {Button, Card} from "react-bootstrap";

type TruckListItemProps = {
    truck: FoodTruck,
}

export const TruckListItem : FunctionComponent<TruckListItemProps> = ({truck}) => {
    return (
        <Card style={{backgroundColor: '#eee'}} className='border-0'>
            <Card.Img variant='top' src={truck.imageURL} style={{height: '160px'}} />
            <Card.Body>
                <Card.Title>{truck.name}</Card.Title>
                <Card.Text>
                    {truck.address}<br />
                    Cuisine: {truck.cuisine}<br />
                    Phone: {truck.phone}<br />
                </Card.Text>
                <Button variant='secondary'>Details</Button>
            </Card.Body>
        </Card>
    )
}