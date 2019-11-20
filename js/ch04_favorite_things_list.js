let readline = require('readline-sync');
let favs = [];
console.log("Welcome to the favorite things app v1.")

let choice = "y";
while (choice == "y") {
    console.log("====Add a favorite thing====");
    let id_in = readline.questionInt("Favorite id: ");
    let thing_in = readline.question("Favorite thing: ");
    let why_in = readline.question("Why is it a favorite? ");

    let favorite = {
        id: id_in,
        thing: thing_in,
        why: why_in
    };

    favs.push(favorite);


    choice = readline.question('Add another favorite?');
}
while (true){
let command = readline.question("Would you like to get a single favorite or "
    + "list them all (Enter 'one' or 'list' or 'exit')");
if (command == "one") {
    let prompt = readline.questionInt("What is the id of the favorite? ");
    for (let f of favs){
        if (f.id == prompt){
            displayFavs(f);
        }
    }
} else if (command == "list"){
    listFavs(favs);
} else if (command == "exit"){
    break;
}
}



console.log("\nBYE");

function displayFavs(f) {
        console.log(`I like ${f.id} - ${f.thing} because ${f.why}.`);
    }

