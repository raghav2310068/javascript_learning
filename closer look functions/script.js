"use strict";

//let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
// The Complete JavaScript Course 21
// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section 😉

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:c++"],
  answerArr: [0, 0, 0, 0],
  registerNewAnswer() {
    let answer = Number(
      prompt(
        `What is your favourite programming language \n 0:javascript \n 1: python \n 2:rust \n 3: c++`
      )
    );
    if (answer > 4) {
      alert("please enter a valid answer");
    } else {
      poll.answerArr[answer] += 1;
      let results = Number(
        prompt(`select an option for  result format \n 1: Array \n 2: String`)
      );
      if (results == 1) {
        console.log(poll.answerArr);
      } else if (results == 2) {
        console.log(`answer are ${poll.answerArr.toString(",")}`);
      } else {
        alert(`select an option for valid result`);
      }
    }

    // console.log(poll.answerArr);
  },
};
const varna = document.getElementById("poll1");
// console.log(varna);

varna.addEventListener("click", poll.registerNewAnswer);

/****************************************************** */

/*
// closure apka variable scope batatat h 
//ek type ke  aise function hote h jo ki automatically invok ho jate h 


const jetspice = {
  airLine: "jetspice",
  code: "JS",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a flight on ${this.airLine} flight ${this.code}${flightNum}`
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
jetspice.book(1234, "raghav");

function_name.call(the object that is refering,parameter 1,parameter 2 ....)
book.call(airbus, 12, "mathew");
book.call(eworing, 23, "sandy");
book.call(luthansa, 34, "george");

// FUNCTION.CALL M TO HUM PARAMETERS pass krte h jabki apply wale me parameters ka array bna kr pass krte h

book.apply(jetspice, [15, "james"]);
book.apply(eworing, [14, "sukhvinder"]);
book.apply(airbus, [13, "happy"]);
book.apply(luthansa, [12, "raghav"]);

// AGAR HAME KOI SPECIFIC FUNCTION EK SPECIFINC VALYE / OBJECT / PARAMETER TO BIND METHOPD KA USE KRTE H
const bookEW = book.bind(eworing);
const bookLH = book.bind(luthansa);
const bookJS = book.bind(jetspice);
bookJS(15, "james");
bookLH(12, "raghav");
bookEW(14, "sukhvinder");
const bookEW23 = book.bind(eworing, 23);
bookEW23("sukhvinder");
(luthansa.plane = 300),
  (luthansa.buyPlanes = function () {
    console.log(this);
    this.plane++;
    console.log(this.plane);
  });
let buyplanesFunc = luthansa.buyPlanes;
let buyPlanesLH = buyplanesFunc.bind(luthansa);
document.querySelector(".buy").addEventListener("click", buyPlanesLH); // agarv mai yha pr bind wala function na laga kr normal wala lgata to jo this keyword h wo document querry selector ko call krta
//partial application
let addTax = (rate, value) => value + value * rate;
console.log(addTax(0.2, 2000));
let addVAT = addTax.bind(null, 0.23);
console.log(addVAT(10000));
*/
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
