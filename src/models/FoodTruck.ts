import MenuItem from "./MenuItem";
import firebase from "firebase";

class FoodTruck {
    name: string;
    address: string;
    coordinates: google.maps.LatLng;
    phone: string;
    cuisine: string;
    website: string;
    menu: MenuItem[];
    imageURL: string;

    constructor(
        truckName: string,
        truckAddress: string,
        truckCoordinates: google.maps.LatLng,
        truckPhone: string,
        truckCuisine: string,
        truckWebsite: string,
        truckMenu: MenuItem[],
        truckImageURL: string,
    ) {
        this.name = truckName;
        this.address = truckAddress;
        this.coordinates = truckCoordinates;
        this.phone = truckPhone;
        this.cuisine = truckCuisine;
        this.website = truckWebsite;
        this.menu = truckMenu;
        this.imageURL = truckImageURL;
    }

    toFirestore() {
        const location = {
            lat: this.coordinates.lat(),
            lng: this.coordinates.lng(),
        }
        const menuItems: Object[] = [];

        this.menu.forEach((item) => {
            menuItems.push(item.toFirestore());
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
                let menuItems : MenuItem[] = [];

                data.menu.forEach((item: any) => {
                    menuItems.push(new MenuItem(item.name, item.price));
                });

                return new FoodTruck(
                    data.name,
                    data.address,
                    new google.maps.LatLng(data.coordinates.lat, data.coordinates.lng),
                    data.phone,
                    data.cuisine,
                    data.website,
                    menuItems,
                    data.imageURL,
                );
            }
        }
    }
}

export default FoodTruck;