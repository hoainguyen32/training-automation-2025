interface Product {
    readonly id: number;
    name: string;
    price?: number
}

function printProductInfo (product: Product): void {
    console.log (`Product ID: ${product.id}`);
    console.log (`Product Name: ${product.name}`);
    console.log (`Product Price: ${product.price ? product.price : "N/A"}`);
}

const product1: Product = {
    id: 1,
    name: "Laptop",
    price: 1000
};

printProductInfo(product1); // Output: Product ID: 1, Product Name: Laptop, Product Price: 1000