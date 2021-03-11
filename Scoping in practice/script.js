'use strict';

//global function
function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    const output = ` You are ${age} years old, and you're born in ${birthYear}`;
    console.log(output);
  }
  printAge();
  return age;
}

//global varriable
const firstName = 'Maruf';
calcAge(1995);

// Hoisting >>
// Cannot access 'job' before initialization

var me = 'Maruf';
let job = 'Student';
const year = 1995;

console.log(me);
console.log(job);
console.log(year);

//types of functions
console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// This keyword

//console.log(this);

const calcAge1 = function (birthYear1) {
  console.log(2021 - birthYear1);
  console.log(this);
};
calcAge1(1991);

//lexical error
const calcAgeArrow = birthYear => {
  console.log(2021 - birthYear);
  console.log(this);
};

calcAgeArrow(1991);

// this keyword in a method

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcage: function () {
    console.log(this);
    console.log(2021 - this.year);
  },
};

jonas.calcage();

//this will point to the object

//method borrowing

const maruf = {
  year: 1995,
};

maruf.calcage = jonas.calcage;
maruf.calcage();

const f = jonas.calcage;

//Regular function vs Arrow function
const jonas1 = {
  firstName: 'Jonas',
  year: 1991,
  calcage: function () {
    console.log(this);
    console.log(2021 - this.year);
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas1.greet();

// Primitives vs Objects

let age = 30;
let oldAge = age;
age = 21;

console.log(age);
console.log(oldAge);
