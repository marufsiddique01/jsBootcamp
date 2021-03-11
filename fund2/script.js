"use strict"; //to write more secure code, avoid accidental errors
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log("i can drive :D");

//functions >>>>>

function logger() {
  console.log("my name is pipo");
}
logger();
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
console.log(fruitProcessor(3, 5));
console.log(fruitProcessor(5, 2));
console.log(fruitProcessor(6, 12));

//function declarations and expression
function calcAge1(birthYear) {
  //const age = 2021 - birthYear;
  return 2021 - birthYear;
}

console.log(calcAge1(1995));
//arrow functions
const calcAge3 = (birthYear) => 2021 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirements = (birthYear) => {
  const age = 2021 - birthYear;
  const retirementYear = 65 - age;
  return retirementYear;
};

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirementYear = 65 - age;
  //return retirementYear;
  return `${firstName} retires in ${retirementYear} years`;
};
console.log(yearsUntilRetirement(1995, "bob"));
console.log(yearsUntilRetirement(1994, "Jonas"));

//function calling another function
function cutFruitsPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const applePieces = cutFruitsPieces(apples);
  const orangePieces = cutFruitsPieces(oranges);
  const juice = `juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}
console.log(fruitProcessor(2, 3));

//exam 3
function calcAverage(a, b, c) {
  return (a + b + c) / 3;
}

const scoreDolphin = calcAverage(2, 2, 4);
const scoreKoalas = calcAverage(2, 3, 4);

console.log(scoreDolphin, scoreKoalas);

checkWinner(scoreDolphin, scoreKoalas);

function checkWinner(avgDolphin, avgKoalas) {
  if (avgDolphin >= 2 * avgKoalas) {
    console.log(`Dolphins win ( ${avgDolphin} vs. ${avgKoalas} )`);
  } else if (avgDolphin > 2 * avgKoalas) {
    console.log(`Koalas win ( ${avgDolphin} vs. ${avgKoalas} )`);
  } else {
    console.log("there is no winner at this moment");
  }
}
checkWinner(576, 111);

//arrays

const friends = ["to", "asd", "asd"];
console.log(friends);

//const years = new Array(1991, 1992, 1993, 2000, 2003);
//console.log(years);

console.log(friends[2]);
console.log(years[4]);

console.log(friends.length);
console.log(friends.length - 1);

//array values of different types
const maruf = ["Maruf", "Siddique", 25, friends];
console.log(maruf);

//exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

//array operation

const friends = ["ievan", "polkka", "yonei"];

friends.push("andambasa"); //push add elements
console.log(friends);

friends.unshift("Jhon"); //unshift places elemnet in the front
console.log(friends);

//remove elements
friends.pop(); //remove last element
console.log(friends);

friends.shift(); //remove first element
console.log(friends);

console.log(friends.indexOf("yonei")); //index of the element

console.log(friends.includes("yonei")); //search array
console.log(friends.includes("maxim"));

function calcTip(billX) {
  if (billX >= 50 && billX <= 300) {
    return billX * 0.15;
  } else {
    return billX * 0.2;
  }
}
const tip = console.log(calcTip());

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

//Objects

const marufArray = [
  "Maruf",
  "Siddique",
  2021 - 1995,
  "Student",
  ["bobbada", "hokmbabsa"],
];
//objects and key value pairs >
const marufObject = {
  //here {} is the object literal syntax
  firstName: "Maruf",
  lastName: "Siddique",
  age: 2021 - 1995,
  job: "Student",
  friends: ["Bobdasa", "muhalaka", "kjasdf"],
};

console.log(marufObject);

//getiing a property from a object
//Dot notation
console.log(marufObject.firstName);

//brackets notation
console.log(marufObject["lastName"]);
console.log(marufObject["firstName"]);

const nameKey = "Name";
console.log(marufObject["first" + nameKey]);
console.log(marufObject["last" + nameKey]);

// const interestedIn = prompt(
//   "what do you want to know abou Maruf? choose between firstName, lastName, age, job and friends"
// );

// if (marufObject[interestedIn]) {
//   console.log(marufObject[interestedIn]);
// } else {
//   console.log("Wrong request, try again bitch");
// }

console.log(
  marufObject.firstName +
    " has " +
    marufObject.friends.length +
    " friends, and his best freiend is called " +
    marufObject.friends[0]
);

marufObject.location = "Bangladesh";

marufObject["facebook"] = "marufsiddique01";

console.log(marufObject);

//Object Methods

const marufObject = {
  //here {} is the object literal syntax
  firstName: "Maruf",
  lastName: "Siddique",
  birthYear: 1995,
  job: "Student",
  friends: ["Bobdasa", "muhalaka", "kjasdf"],
  hasDriversLicense: true,

  // calcAge: function () {
  //   return 2021 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },

  checkDriverLicense: function () {
    if (this.hasDriversLicense) {
      return "he has a driver's license";
    } else {
      return "he has no driving license";
    }
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
  },
};

console.log(marufObject.calcAge());

console.log(marufObject.age);

console.log(marufObject.getSummary());
//challenge
console.log(
  `${marufObject.firstName} is a ${marufObject.calcAge()}-years old ${
    marufObject.job
  }, and ${marufObject.checkDriverLicense()}`
);

//coding challenge 3

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    const bmi = this.mass / (this.height * this.height);
    return bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

john.calcBMI();
console.log(john.bmi);

console.log(mark.calcBMI());
console.log(john.calcBMI());

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
      john.fullName
    }'s BMI (${john.calcBMI()})`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
      mark.fullName
    }'s BMI (${mark.calcBMI()})`
  );
}


//Loops

//for loop

for (let i = 0; i < 10; i++) {
  console.log("yo" + i);
}

const marufArray = [
  "Maruf",
  "Siddique",
  2021 - 1995,
  "Student",
  ["bobbada", "hokmbabsa"],
];

for (let i = 0; i < marufArray.length; i++) {
  console.log(marufArray[i]);
}


const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

console.log(bill);

const tips = [];
const totals = [];

function calcTip(billX) {
  if (billX >= 50 && billX <= 300) {
    return billX * 0.15;
  } else {
    return billX * 0.2;
  }
}

for (let i = 0; i < bill.length; i++) {
  tips[i] = calcTip(bill[i]);
  totals[i] = tips[i] + bill[i];
}

console.log(tips, totals);
//---------------------------

const arr = [10, 10, 10, 10, 10, 10, 10];

let sum = 0;
for (let j = 0; j < arr.length; j++) {
  sum = sum + arr[j];
  //sum += arr[j]
}

console.log(sum);

function calcAverage(sum) {
  return sum / arr.length;
}

console.log(calcAverage(sum));

//passing array in a function >>

const calcAverage2 = function (arr1) {
  let sum = 0;
  for (let j = 0; j < arr1.length; j++) {
    sum = sum + arr1[j];
    //sum += arr[j]
  }
  return sum / arr1.length;
};

console.log(calcAverage2(totals));
*/

//function >>

const printForecast = function (arr) {
  let str = "...";
  for (let j = 0; j < arr.length; j++) {
    str += ` ${arr[j]}°C in ${j + 1} days ... `;
  }
  console.log(str);
};

const data = [17, 21, 23];
const data1 = [12, 5, -5, 0, 4];
printForecast(data);
