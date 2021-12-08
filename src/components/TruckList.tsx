import {FunctionComponent, useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import {db} from "../config/firebaseConfig";
import FoodTruck from "../models/FoodTruck";

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

    return (
        <div>
            {
                trucks && trucks.map((truck) => {
                    return (
                        <div>
                            <h3>{truck.name}</h3>
                            <p>{truck.phone}, {truck.website}, {truck.cuisine}</p>
                            <img src={truck.imageURL} alt=""/>
                        </div>
                    )
                })
            }
        </div>
    )
}