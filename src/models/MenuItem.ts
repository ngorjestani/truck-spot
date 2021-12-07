class MenuItem {
    name: string;
    price: string;

    constructor(itemName?: string, itemPrice?: string) {
        this.name = itemName ? itemName :  '';
        this.price = itemPrice ? itemPrice : '';
    }

    toFirestore() {
        return {
            name: this.name,
            price: this.price,
        }
    }
}



export default MenuItem;