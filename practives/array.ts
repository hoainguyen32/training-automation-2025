// Tính tổng các phần tử trong mảng
function sumArray(arr: number[]): number {
  let sum = 0;

  for (let i = 0; i < arr.length; i++){ 
    sum += arr[i];
  }
 return sum;
}

console.log ("The sum array: " + sumArray([1,2,3,4,5]));

// Tìm phần tử lớn nhất / nhỏ nhất trong mảng
function findMaxMin (arr: number[]): [number, number] {
  if (arr.length === 0) {
    throw new Error("Array cannot be empty");
  }

  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [max, min];
}
let arr = [5, 1, 9, 3];
let [max, min] = findMaxMin(arr); 

console.log("Max: " + max);
console.log("Min: " + min);

// Đếm số phần tử chẵn / lẻ trong mảng

// Đếm số lần xuất hiện của một số cho trước

// Sắp xếp mảng tăng dần / giảm dần

// Tìm số lớn thứ 2 trong mảng

// Tính trung bình cộng các phần tử

// Đảo ngược mảng