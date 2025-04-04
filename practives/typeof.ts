// const a = Boolean (2);
// console.log (a);

//function
function isPresent(a: any) {
    if (typeof a === "number") { 
        console.log("true");
    } else {
        console.log("false");
    }
}

isPresent(10);      // true
isPresent(3.14);    // true
isPresent("hello"); // false
isPresent(true);    // false
isPresent([]);      // false
isPresent({});      // false
isPresent(null);    // false