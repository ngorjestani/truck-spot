import IMenuItem from "./IMenuItem";

class MenuItem {
    name: string;
    price: string;

    constructor(item: IMenuItem) {
        this.name = item.name;
        this.price = item.price;
    }

    toFirestore() {
        return {
            name: this.name,
            price: this.price,
        }
    }
}



export default MenuItem;