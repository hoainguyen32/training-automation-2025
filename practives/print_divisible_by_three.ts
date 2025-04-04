function printDivisibleByThree (a:number, b:number): void {
    const result: number[] = [];

    const start = Math.max(a,b);
    const end = Math.min(a,b);

    for (let i = start; i >= end; i--) {
        if (i%3 === 0 ) {
            result.push(i);

        }
    }

    if (result.length > 0) {
        console.log ("Result: " + result.join(", "));
    } else {
        console.log ("NOT FOUND");
    }
}


printDivisibleByThree (2,7);
printDivisibleByThree (3,10);