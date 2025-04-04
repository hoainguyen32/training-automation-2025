function isNumberInArray(input: string, arrayInput: number[]): string {
    // Convert input string to number
    const [n, x] = input.split(' ').map(Number);

    // Check if x is in array
    return arrayInput.indexOf(x) ? "YES" : "NO";
}

const input = "5 3";
const arrayInput = [1, 2, 3, 4, 5];

console.log(isNumberInArray(input, arrayInput));
