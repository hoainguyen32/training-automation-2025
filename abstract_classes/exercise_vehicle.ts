abstract class Vehicle {
    name: string;
    speed: number;

    constructor(name: string, speed: number) {
        this.name = name;
        this.speed = speed;
    }
    
    // Abstract method
    abstract move(): void;

    showInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Speed: ${this.speed} km/h`);
    }
}

class Car extends Vehicle {
    brand: string;

    constructor(name: string, speed: number, brand: string) {
        super(name, speed);
        this.brand = brand;
    }

    move(): void {
        console.log(`${this.brand} ${this.name} is moving at ${this.speed} km/h.`);
    }

    showInfo(): void {
        super.showInfo();
        console.log(`Brand: ${this.brand}\n`);
    }
}

class Bicycle extends Vehicle {
    type: string;

    constructor(name: string, speed: number, type: string) {
        super(name, speed);
        this.type = type;
    }

    move(): void {
        console.log(`${this.name} is moving at ${this.speed} km/h.`);
    }

    showInfo(): void {
        super.showInfo();
        console.log(`Type: ${this.type}\n`);
    }
}

// Create a list of vehicles
const vehicles: Vehicle[] = [
    new Car("Sedan", 120, "Toyota"),
    new Bicycle("Mountain Bike", 30, "Mountain")
];

// Call move() and showInfo() for each vehicle
vehicles.forEach(vehicle => {
    vehicle.move();
    vehicle.showInfo();
});