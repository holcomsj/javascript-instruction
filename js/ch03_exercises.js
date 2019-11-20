function min(a, b) {
    if (a > b) {
        console.log(a);
    } else if (b > a) {
        console.log(b);
    } else {
        console.log("a = b");
    }
}
//min(9,8);

function isEven(a) {
    a = Math.abs(a);
    if (a == 0) {
        return true;
    } else if (a == 1) {
        return false;
    } else {
        isEven(a - 2);
    }
}

//console.log(isEven(-1));

function countB(string) {
    count = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] = "B") {
            count++;
        }
        return count;
    }
}