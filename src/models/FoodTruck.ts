import MenuItem from "./MenuItem";
import IFoodTruck from "./IFoodTruck";
import IMenuItem from "./IMenuItem";
import firebase from "firebase";

class FoodTruck {
    name: string;
    address: string;
    coordinates: google.maps.LatLng;
    phone: string;
    cuisine: string;
    website: string;
    menu: IMenuItem[];
    imageURL: string;

    constructor(truck: IFoodTruck) {
        this.name = truck.name;
        this.address = truck.location.formatted_address!;
        this.coordinates = truck.location.geometry?.location!;
        this.phone = truck.phone;
        this.cuisine = truck.cuisine;
        this.website = truck.website;
        this.menu = truck.menu;
        this.imageURL = truck.imageURL;
    }

    toFirestore() {
        const location = {
            lat: this.coordinates.lat(),
            lng: this.coordinates.lng(),
        }
        const menuItems: Object[] = [];

        this.menu.forEach((item) => {
            menuItems.push(new MenuItem(item).toFirestore());
        });

        return {
            name: this.name,
            address: this.address,
            coordinates: location,
            phone: this.phone,
            cuisine: this.cuisine,
            website: this.website,
            menu: menuItems,
            imageURL: this.imageURL,
        }
    }

    static fromFirestore() {
        return {
            fromFirestore: function (
                snapshot: firebase.firestore.QueryDocumentSnapshot,
                options: firebase.firestore.SnapshotOptions
            ): FoodTruck {
                const data = snapshot.data(options);
                let menuList: IMenuItem[] = [];

                data.menu.forEach((item: IMenuItem) => {

                })

            }
        }
    }
}

export default FoodTruck;