function calculatePerimeterAndAreaOfRectangle (a: number, b: number) {
    let c = 2*(a+b);
    let s = a*b;

    console.log ("Perimeter of rectangle: " + c);
    console.log ("Area of rectangle: " + s);
}

calculatePerimeterAndAreaOfRectangle (20, 10);