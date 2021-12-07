import {FunctionComponent} from "react";
import {Button} from "react-bootstrap";
import {db} from "../config/firebaseConfig";
import FoodTruck from "../models/FoodTruck";

type TruckListProps = {

}

export const TruckList : FunctionComponent<TruckListProps> = (props) => {
    const handleButtonClick = () => {
        const trucks = db.collection(FoodTruck.collectionName)
            .withConverter(FoodTruck.firebaseConverter)
            .get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    console.log(doc.data());
                })
            })
    };

    return (
        <div>
            <Button variant="primary" onClick={handleButtonClick}>Log truck list</Button>
        </div>
    )
}