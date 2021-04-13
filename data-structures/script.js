'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 11,
    close: 23,
  },
};
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

  //before ES6
  //openingHours: openingHours,
  //ES6 version
  openingHours,

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },

  //Functions enhancement

  //before ES6
  // order: function(starterIndex, mainIndex){
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  // }

  //After ES6
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log(restaurant);

//optional chaining(?.)

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// with optional chaining

console.log(restaurant.openingHours.fri?.open);

//example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Destructing objects
//two ways of doing this>>

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

const properties = Object.keys(openingHours);
console.log(properties);

console.log(`we are open on ${properties.length}`);

for (const day of properties) {
  console.log(day);
}
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

// Challenge ---> 1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1demo = [...game.players[0]];
const players2demo = [...game.players[1]];

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// const gk = [players1.shift(), players2.shift()];
// console.log(gk);
// const fieldPlayers = [...players1, ...players2];
// console.log(fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller', 'Lewandowski');

team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);

//_____________>
//Looping arrays

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// //for-of loop >>
// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   //console.log(item);
//   //console.log(`${item[0] + 1}: ${item[1]}`); //old technique
//   console.log(`${i + 1}: ${el}`); //new technique > destracting
// }

//console.log(menu.entries);

//enhanced object literals

//Challenge #2

for (const goals in game.scored) {
  console.log(`Goal ${Number(goals) + 1}: ${game.scored[goals]}`);
}

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

const odds = Object.values(game.odds);
let avg = 0;
for (const odd of odds) avg += odd;
avg /= odds.length;
console.log(avg);

for (const odd in game.odds) {
  console.log(`Odd of ${odd}: ${game.odds[odd]}`);
}

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

//Sets

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Hot Dog',
  'Risotto',
  'Pizza',
]);

console.log(orderSet);

console.log(new Set('Jonas'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('bread'));
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
console.log(orderSet);

//retrive values from set
//-no need to getting datas out of set

for (const order of orderSet) console.log(order);

//turning an array to set

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

//Maps

const rest = new Map();
rest.set('name', 'Pipo Fanda');
rest.set(1, 'Firenze, Itaty');
console.log(rest.set(2, 'Dhaka, BD'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(false));

const time = 1;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest);
rest.delete(2);
console.log(rest);

console.log(rest.size);
//rest.clear;
console.log(rest);

//Map iteration

const question = new Map([
  ['question', 'what is the best programming langulage?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'Correct 👏'],
  [false, 'Try again! 🤦‍♀️'],
]);

console.log(question);

//convert object to maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key == 'number') console.log(`Answer ${key}: ${value}`);
}

// // const answer = Number(prompt('Your Answer'));
// // console.log(answer);

// const check = question.get('Correct') === answer;
// console.log(check);
// console.log(question.get(check));

//Challenge #3

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);

const time1 = [...gameEvents.keys()].pop();
console.log(time1);
console.log(
  `An event happened, on average, every ${time1 / gameEvents.size} minutes`
);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'First' : 'Second';
  console.log(` [${half} Half] ${min}: ${event}`);
}

//string

const airline = 'TAP AIR';
const plane = 'Boeing 787';

console.log(plane[1]);

console.log(airline.length);

console.log(plane.length);

console.log(plane.indexOf('o'));

//slice method

console.log(airline.slice(4, 6));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.indexOf(' ') + 1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seat
  const s = seat.slice(-1);
  if (s == 'B' || s == 'E') {
    console.log(`${seat} is middle seat`);
  } else {
    console.log(`${seat} is windowed seat`);
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('11A');
checkMiddleSeat('11E');
checkMiddleSeat('11F');

console.log(new String('Maruf'));

//fix capitalization in names

const passenger = 'MaRuF';
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect =
  passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

//check/compare input email

const email = 'marufsiddique71@gmail.com';
const loginEmail = ' marUfsiddIque71@gmail.com \n';

const lowerEmail = loginEmail.toLocaleLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

//ez version^^^^^

const normalizedEmail = lowerEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail);

//replacing

const priceGB = '288,96€';
const priceUS = priceGB.replace('€', '$').replace(',', '.');
console.log(priceUS);

const notice = 'Maruf is a lost man, Maruf cant do anything';
console.log(notice.replace(/Maruf/g, 'Pipo'));
// here >>> /..../ select strings to replace and g means global

//booleans

console.log(plane.includes('A320'));
console.log(plane.includes('787'));

// practise

const checkBaggage = function (items) {
  const baggage = items.toLocaleLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('Warninggg !!!!!!');
  } else {
    console.log("He's good to go");
  }
};

checkBaggage('I have a laptop, some Food and pocket Knife');
checkBaggage('socks and camera');
checkBaggage('Got some snacks and a gun for protection');

//slit strings
console.log('a+very+nice+string'.split('+'));

// joining strings

const firstName = 'Maruf',
  lastName = 'Siddique';

const greetName = ['Mr.', firstName, lastName].join(' ');
console.log(greetName);

//string padding

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log(message.padStart(25, '+').padEnd(35, '+'));

const maskCreditCardNumber = function (number) {
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCardNumber('4673198314693274'));
console.log(maskCreditCardNumber(4673198314693274));
console.log(maskCreditCardNumber(4673198314));

//repeat
const message2 = 'Bad weather...All Departures Delayed... ';
console.log(message2.repeat(5));
