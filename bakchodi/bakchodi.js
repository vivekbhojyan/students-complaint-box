let  a = 10;
var b = 20;
const c = 5;

let bool = true;
let und;
let nul= null;

console.log("Value of a: " + a);
console.log(typeof(a));

console.log("Value of b: " + b);
console.log(typeof(b));

console.log("Value of c: " + c);
console.log(typeof(c));

console.log(typeof(bool));
console.log(typeof(und));
console.log(typeof(nul));

console.log("Sum: " + (a+b));
console.log("Difference: " + (a-b));
console.log("Multiplication: " + (a*b));
console.log("Division: " + (b/a));


let age=18;
if(age>=18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}

let students={
    Name:"vvv",
   Age :89
}
function add(p,q){
    return p+q;
}
console.log(add(5,7));

let today=new Date();
console.log(today);
console.log(Math.random()*100);

let s="123";
let convert=Number(s);
console.log(convert+10);