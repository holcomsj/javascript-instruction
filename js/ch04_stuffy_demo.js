//create 3 stuffies, store in an array, then print to console.

let s1 = {
    id: 1,
    type: "Weresquirrel",
    color: "Grey",
    size: "XL",
    limbs:7
};
let s2 = {
    id: 2,
    type: "Werebear",
    color: "Black",
    size: "X",
    limbs:4
};
let s3 = {
    id: 3,
    type: "Werefish",
    color: "Silver",
    size: "XS",
    limbs:3
};

let stuffies = [s1, s2, s3];
for (let s of stuffies){
    console.log("=========stuffy stuff===========");
   for (let k of Object.keys(s)){
       console.log("Property "+k+ ", value: "+s[k]);
   }
}