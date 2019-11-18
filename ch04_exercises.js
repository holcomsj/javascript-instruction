function range(start, end, step = 1) {
    let array = [];
    for (i = start; i <= end; i += step) {
        array.push(i);
    }
    return array;
}
console.log(range(2, 10));

function sumIt(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(sumIt(range(3, 9, 3)));

function reverseArray(array) {
    newArray = [];
    length = array.length;
    for (let i = 0; i < length; i++) {
        temp = array.pop();
        newArray.push(temp);
    }
    return newArray;
}
console.log(reverseArray([8, 6, 7, 5, 3, 0, 9]));

// function reverseArrayInPlace(array) {
//     for (let i = 0; i < array.length; i++) {
//         temp = array.shift();
//         array.push(temp);
//     }
//     return array;
// }
// console.log(reverseArrayInPlace([8, 6, 7, 5, 3, 0, 9]));

