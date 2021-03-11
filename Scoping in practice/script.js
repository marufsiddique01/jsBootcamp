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
