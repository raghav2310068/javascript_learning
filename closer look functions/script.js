"use strict";
const jetspice = {
  airLine: "jetspice",
  code: "JS",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a flight on ${this.airLine} flight ${this.code} ${flightNum}`
    );
    this.booking.push({ flight: `${this.airLine}`, name: `${name}` });
  },
};
const airbus = {
  airLine: "boeing",
  code: "BO",
  booking: [],
};
const luthansa = {
  airLine: "luthansa",
  code: "LU",
  booking: [],
};
const eworing = {
  airLine: "eworing",
  code: "EW",
  booking: [],
};
let book = jetspice.book;
//jetspice.book(1234, "raghav");

// function_name.call(the object that is refering,parameter 1,parameter 2 ....)
//book.call(airbus, 12, "mathew");
//book.call(eworing, 23, "sandy");
//book.call(luthansa, 34, "george");

//FUNCTION.CALL M TO HUM PARAMETERS pass krte h jabki apply wale me parameters ka array bna kr pass krte h
book.apply(jetspice, [15, "james"]);
book.apply(eworing, [14, "sukhvinder"]);
book.apply(airbus, [13, "happy"]);
book.apply(luthansa, [12, "raghav"]);
/***************************** */
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greetHey = greet("hey");
greetHey("raghav");
*/
/******************** */
/*
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...other] = str.split(" ");
  // console.log(first, other);
  return [first.toUpperCase(), ...other].join(" ");
};
//higer order string
const transformString = function (str, fn) {
  console.log(`original string: ${str}`);

  console.log(`transformed string : ${fn(str)}`);
  console.log(`function name : ${fn.name}`);
};

transformString("javascript is the best language", oneWord);
transformString("javascript is the best language", upperFirstWord);

const high5 = function () {
  console.log("💥💥💥");
};
document.body.addEventListener("click", high5);
*/

/***************************************** */
/*
const flight = "LH234";
const raghav = {
  name: "raghav mittal",
  passport: 670873765455,
};
const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr." + passenger.name;
  if (passenger.passport === 670873765455) {
    alert("checkin done");
  } else {
    alert("wrong passport");
  }
};
checkIn(flight, raghav);
console.log(flight);
console.log(raghav);

const newPassPort = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassPort(raghav);
checkIn(flight, raghav);
console.log(raghav);

//JAVASCRIPT DOES NOT HAVE PASSBY REFERNCE

*/

/********************************** */
/*
const bookings = [];
const createBooking = function (flightNum, passengerNum = 1, price = 199) {
  // passengerNum = passengerNum || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    passengerNum,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking("LHH98");
createBooking("BOE3954",2,800);
createBooking('ha89',5,1111)
// AGAR KOI PARAMETR KO SKIP  KRNA H CALL KE WAQT TO USME UNDEFINED DALENGE 
createBooking('ha89',undefined,1111)

console.log(bookings);

*/
