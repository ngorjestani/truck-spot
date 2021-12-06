class MenuItem {
    name: string;
    price: string;

    constructor(name: string, price: string) {
        this.name = name;
        this.price = price;
    }

    toFirestore() {
        return {
            name: this.name,
            price: this.price,
        }
    }
}



export default MenuItem;