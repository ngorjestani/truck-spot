import MenuItem from "./MenuItem";
import firebase from "firebase";

class FoodTruck {
    name: string;
    address: string;
    //This should be a google.maps.LatLng type but that breaks the firebase converter for some reason
    coordinates: any;
    phone: string;
    cuisine: string;
    website: string;
    menu: MenuItem[];
    imageURL: string;

    constructor(
        truckName: string,
        truckAddress: string,
        //This also should be a google.maps.LatLng type
        truckCoordinates: any,
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

    /*TODO:
       figure out how to use the other converter
       method without fucking something up*/

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

    static firebaseConverter = {
        //Still using the other converter method because I know it works
        toFirestore(truck: FoodTruck): firebase.firestore.DocumentData {
            const location = {
                lat: truck.coordinates.lat(),
                lng: truck.coordinates.lng(),
            }
            const menuItems: Object[] = [];

            truck.menu.forEach((item) => {
                menuItems.push(item.toFirestore());
            });

            return {
                name: truck.name,
                address: truck.address,
                coordinates: location,
                phone: truck.phone,
                cuisine: truck.cuisine,
                website: truck.website,
                menu: menuItems,
                imageURL: truck.imageURL,
            }
        },
        fromFirestore(
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
                data.coordinates,
                data.phone,
                data.cuisine,
                data.website,
                menuItems,
                data.imageURL,
            );
        }
    }

    static collectionName = 'foodTrucks';
}

export default FoodTruck;