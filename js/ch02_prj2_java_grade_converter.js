console.log("Welcome to the Letter Grade Converter");

for (let i = 0; i < 5; i++) {
    let pct = Math.floor(Math.random() * 41) + 60;
    console.log("Numeric Grade = " + pct);

    let letterGrade = "F";
    if (pct > 88) {
        letterGrade = "A";
    } else if (pct >= 80) {
        letterGrade = "B";

    } else if (pct >= 67) {
        letterGrade = "C";

    } else if (pct >= 60) {
        letterGrade = "D";
    }
    console.log("Letter Grade = " + letterGrade);
}