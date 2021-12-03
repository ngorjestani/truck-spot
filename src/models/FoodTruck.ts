import PlaceResult = google.maps.places.PlaceResult;
import MenuItem from "./MenuItem";

type FoodTruck = {
    name: string;
    location: PlaceResult;
    phone?: string;
    cuisine: string;
    website?: string;
    menu?: MenuItem[];
    imageURL?: string;
}

export default FoodTruck;