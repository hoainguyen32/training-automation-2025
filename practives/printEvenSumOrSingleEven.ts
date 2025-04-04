function printEvenSumOrSingleEven (a:number, b:number) {
    if (a%2 === 0 && b%2 === 0) {
        console.log ("Sum: " + (a + b));
    } else if (a%2 === 0 ) {
        console.log ("Result: " + a);
    } else if (b%2 === 0) {
        console.log("Result: " + b);
    } else {
        console.log("Not found");
    }
}

printEvenSumOrSingleEven (2,6);
printEvenSumOrSingleEven (2,5);
printEvenSumOrSingleEven (3,8);