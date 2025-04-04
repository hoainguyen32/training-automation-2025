// Tìm số lớn nhất trong mảng
function isPrime(num) {
    if (num < 2)
        return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}
function findLargestPrime(n, arr) {
    var primes = arr.filter(isPrime);
    if (primes.length === 0) {
        console.log("NOT FOUND");
    }
    else {
        console.log(Math.max.apply(Math, primes));
    }
}
// Ví dụ:
var n = 0;
var numbers = [];
findLargestPrime(n, numbers); // Output: 3
