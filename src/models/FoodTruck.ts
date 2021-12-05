import MenuItem from "./MenuItem";
import IFoodTruck from "./IFoodTruck";
import PlaceResult = google.maps.places.PlaceResult;

class FoodTruck {
    name: string;
    location: PlaceResult;
    phone?: string;
    cuisine: string;
    website?: string;
    menu?: MenuItem[];
    imageURL?: string;

    constructor(truck: IFoodTruck) {
        this.name = truck.name;
        this.location = truck.location;
        this.phone = truck.phone;
        this.cuisine = truck.cuisine;
        this.website = truck.website;
        this.menu = truck.menu;
        this.imageURL = truck.imageURL;
    }
}

export default FoodTruck;