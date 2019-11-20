let letters = ["a", "b", "c", "d", "e"];

console.log(letters);

for (let l of letters) {
    console.log(l);
}

//slice and concat - first 2 + last 2
let l1 = letters.slice(0, 2);
console.log(l1);
let l2 = letters.slice(3);
console.log(l2);
//create and array with letters and an array
let l3 = l1.push(l2);
//combines arrays
console.log(l1.concat(l2));

let nbrs = [1, 5, 3, 7, 9, 13];
let sum = 0;
for (let i = 0; i < nbrs.length; i++) {
    sum += nbrs[i];
}
console.log("sum = " + sum);
