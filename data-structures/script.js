'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//Destructing objects
//two ways of doing this>>

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//>>>>>>>>>>>>>>>>>>>>>>>>>
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[0];
// const c = arr[0];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// //destructing arrays
// // , can skip array varriables
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //> manual method>>>>>>>>>>>>>
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// //JS Method
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //nested array destructuring

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //default values

// const [p, q, r] = [8, 9];
// console.log(p, q, r);

// const arr1 = [7, 8, 9];
// const badNewArr = [1, 2, arr1[1], arr1[2], arr1[2]];

// console.log(badNewArr);

// //packed and unpacked

// //spread operator

// const newGoodArr = [1, 2, ...arr1];
// console.log(newGoodArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //spread >> the right side of elements

// //rest patterns and operations

// const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// //1 ) objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //2) functions

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);

// const x = [23, 5, 7];
// add(...x);

// short circuiting , and or operator

//|| or , && and
console.log('----- OR -----');
//use any data type, return any data type, short-circuiting
console.log(3 || 'Pipo');

console.log('' || 'Pipo');
console.log(true || 1);
console.log(undefined || null);

//example >>

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----- AND -----');

console.log(3 && 'Pipo');
console.log('' && 'Pipo');
console.log(true && 1);
console.log(undefined && null);

// nulish coalescing operator (??)
console.log('----- nulish coalescing operator -----');

console.log(3 ?? 'Pipo');
console.log('' ?? 'Pipo');
console.log(true ?? 1);
console.log(undefined ?? null);
