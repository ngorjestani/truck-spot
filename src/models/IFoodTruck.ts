import PlaceResult = google.maps.places.PlaceResult;
import MenuItem from "./MenuItem";
import IMenuItem from "./IMenuItem";

interface IFoodTruck {
    name: string;
    location: PlaceResult;
    phone?: string;
    cuisine: string;
    website?: string;
    menu?: IMenuItem[];
    imageURL?: string;
}

export default IFoodTruck;