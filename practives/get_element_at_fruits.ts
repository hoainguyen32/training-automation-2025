// Cho một mảng và tìm index của các phân tử tromg mảng đó
// TH có thì in ra phần tử tại vị cần tìm ngướcj lại thì không có

function getElementAtFruits (fruits: string[], index: number) {
    if (fruits[index] !== undefined) {
        console.log ("Result: " + fruits[index]);
    }else {
        console.log ("Result: No fruit matches the position " + index);
    }
}

let fruits = ['apple', 'orange', 'banana'];
getElementAtFruits (fruits, 2);
getElementAtFruits (fruits, 3);
