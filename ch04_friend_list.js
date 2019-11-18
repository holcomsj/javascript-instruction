//Friend list
console.log("Welcome to the friend list")
let readline = require('readline-sync');

let friendArray = [];
while (true) {
    let str = readline.question("Enter the name of your "+
   " friend (type exit to leave): ");
    if (str == "exit") {
        break;
    } else {
        friendArray.push(str);
    }
}
console.log(friendArray);