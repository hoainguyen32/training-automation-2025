// Class
class Product {
    name: string;
    price: number;

    constructor (name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    // getName () : string {
    //     return this.name;
    // }

    // getPrice () : number {
    //     return this.price;
    // }
}

const product = new Product ('Carrot', 20);

console.log (product)
//console.log (product.getName());
//console.log (product.getPrice());

