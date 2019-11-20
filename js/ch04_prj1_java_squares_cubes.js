let readline = require('readline-sync');
console.log("Welcome to the table of powers");

let nbr = readline.questionInt('Enter an integer: ');

console.log("Number\tSquare\tCube");
console.log("======\t======\t====");
for (i = 1; i <= nbr; i++) {
    let sqr = i * i;
    let cube = i * i * i;
    console.log(i + "\t" + sqr + "\t" + cube);
}