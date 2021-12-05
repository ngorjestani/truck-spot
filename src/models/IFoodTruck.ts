import PlaceResult = google.maps.places.PlaceResult;
import MenuItem from "./MenuItem";

interface IFoodTruck {
    name: string;
    location: PlaceResult;
    phone?: string;
    cuisine: string;
    website?: string;
    menu?: MenuItem[];
    imageURL?: string;
}

export default IFoodTruck;