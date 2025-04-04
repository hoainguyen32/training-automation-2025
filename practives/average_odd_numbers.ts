function averageOddNumbers(arr: number[]): string {
    // Lọc các số lẻ
    const oddNumbers = arr.filter(num => num % 2 !== 0);
    
    if (oddNumbers.length === 0) {
        return "0.0000";
    }

    // Tính trung bình cộng
    const average = oddNumbers.reduce((sum, num) => sum + num, 0) / oddNumbers.length;

    // Làm tròn đến 4 chữ số thập phân và trả về chuỗi
    return average.toFixed(4);
}

// Test case
const inputArray = [1, 2, 3, 4, 6];
console.log(averageOddNumbers(inputArray)); // Output: "2.0000"
