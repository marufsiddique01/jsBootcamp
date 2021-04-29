'use strict';

const bookings = [];
//test
const createBooking = function (
  flightNum,
  numPassengeers = 1,
  price = 199 * numPassengeers
) {
  //ES5
  //   numPassengeers = numPassengeers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengeers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123');
