//let js = "amazing";
/*
if (js == "amazing") alert("JavaScript is fun!");

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);
console.log('jonas');
console.log('23');

let firstName = "Matilda";
let age = 23;

console.log(firstName);
console.log(firstName);
console.log(firstName);

const mm = 78;
const jm = 92;

const mh = 1.69;
const jh = 1.76;

const bmim = mm / (mh * mh);
const bmij = jm / (jh * jh);

console.log(bmim , bmij);

if  (bmim > bmij){
    console.log("Mark's BMI is higher than John's BMI")
}else{
    console.log("John's BMI is higher than Mark's BMI")
}


const age = 15;
const isOldEnough = age >=18;

if (isOldEnough) {
    console.log("Sarah can start driving licence 🚗 ");
} else {
    const yearLeft = 18 - age;
    console.log(`Sarah is too young. wait another ${yearLeft} years`);
}


const birthYear = 1996;
let century;
if(birthYear <= 2000){
    century = 20;
} else{
    century = 21;
}

console.log(century);


//converting strings to number.
const inputYear = '1991';
console.log(Number(inputYear) , inputYear);
console.log(Number(inputYear) +18);

console.log(Number('Jonas'))
console.log(typeof NaN)

//converting numbers to string

console.log(String(23),23);
console.log(String(23)+10 , 23+10);

// type coercion

console.log('I am ' + 23 + ' years old')



// type coerocion if else
// zero is a falsie value
const money = 10;
if (money){
    console.log("Don't Spend it all ;)");
}else{
    console.log("you should get a job!");
}

//undefined is a  falsie value

let height;

if(height){
    console.log("yay! Height is defined");
}else{
    console.log("Height is UNDEFINED");
}

//Equality operators
///=== compares value and datatype
const age = 18;
if(age === 18){
    console.log("you just became an adult :D");
}

//promt function 
const favNum = Number (prompt("What's your favorite number ? "))
console.log(favNum)

if(favNum == 69){
    console.log("Cool! "+ favNum + " is an amazing number!")
}

//boolean logic 
//and , or , not 
//logiacal Operators

const hasDriversLicense = false;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); //and
console.log(hasDriversLicense || hasGoodVision); //or
console.log(hasDriversLicense != hasGoodVision); //not


const d1= 96, d2= 108, d3= 89;
const k1=88, k2=100, k3=110;

const dAvg = (d1+d2+d3)/3;
const kAvg = (k1+k2+k3)/3;

console.log(dAvg, kAvg);

if(dAvg>kAvg){
    console.log("Dolphins win 🏆")
} else if(kAvg>dAvg){
    console.log("Koalas Win 🏆")
} else {
    console.log("Draw")
}

//Bonus 1 

const d1= 97, d2= 112, d3= 81;
const k1=109, k2=95, k3=86;

const dAvg = (d1+d2+d3)/3;
const kAvg = (k1+k2+k3)/3;

console.log(dAvg, kAvg);

if(dAvg>kAvg && dAvg >=100){
    console.log("Dolphins win 🏆");
} else if(kAvg>dAvg && kAvg >=100){
    console.log("Koalas Win 🏆");
} else if(kAvg === dAvg && dAvg >= 100 && kAvg>=100) {
    console.log("Draw");
}else{
    console.log("No one wins 😥");
}

//the switch statement

const day = "tuesday";

switch(day){
    case 'monday':
        console.log("Plan course structure");
        console.log("go to coding meetup");
        break;
    case'tuesday':
        console.log("prepare theory videos");
        break;
    default:
        console.log("Not a valid day!!")
}

//conditional 
const age = 16;
age >= 18 ? console.log("i like to drink wine 🥂") : console.log("i like to drink water 🥛");

*/

//coding challenges 4

//promt function
const billAmount = Number(prompt("enter bill amount "));
console.log(billAmount);

let tip;

billAmount >= 50 && billAmount <= 300
  ? (tip = (billAmount / 100) * 15)
  : (tip = (billAmount / 100) * 20);

console.log(tip);

console.log(
  `the bill was ${billAmount}, the tip was ${tip}, and the total value ${
    billAmount + tip
  }`
);
