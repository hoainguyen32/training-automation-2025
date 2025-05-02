interface Flyble {
    fly(): void;
}

interface Swimmable {
    swim(): void;
}

class Duck implements Flyble, Swimmable {
    fly(): void {
        console.log("Duck is flying");
    }

    swim(): void {
        console.log("Duck is swimming");
    }
}

const duck1 = new Duck();
duck1.fly(); // Output: Duck is flying
duck1.swim(); // Output: Duck is swimming