"use strict";

const openingHours = {
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
};

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainCourseIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainCourseIndex]];
  },
  openingHours,

  orderDelievery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "22:00",
    address,
  }) {
    console.log(
      `order recieved!! your ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be orderd to ${this.address} at ${this.time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`your pasta is with ${ing1},${ing2} and ${ing3} is ready`);
  },
  orderpizza: function (mainIngredient, ...secondaryIngredient) {
    console.log(
      `the main ingredient is ${mainIngredient} and the secondary ingredient are ${secondaryIngredient}`
    );
  },
};
let menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

//WORKING WITH STRINGS  👇

const airline = "air india ";
const plane = "A2300BU";
for (let i of airline) {
  console.log(i);
}
console.log(airline.length);
console.log(airline.indexOf("i"));
console.log(airline.lastIndexOf("i"));
console.log(airline.slice(5));
console.log(airline.slice(5,7));

/****************** */
// MAPS PART 2

/************************************ */
/*
MAPS PART 1
const rest = new Map();
rest.set("name", "la pizzeria");
rest.set(1, "delhi , india");
rest.set(2, "geneva germany");
console.log(rest);
rest
  .set("category", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 10)
  .set("close", 22)
  .set(true, "we are open :D")
  .set(false, "we are closed");
console.log(rest);
console.log(rest.get("name"));
console.log(rest.get("open"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
*/

/******************************************** */

/*
//SETS KEVAL UNIQUE VALUE STOR KRTA H AGAR KOI DUPLICATE VALUE AA JATI H TO USE IGNORE KR DETA H
const orderset = new Set([
  "pizza",
  "pasta",
  "risotto",
  "pizza",
  "pizza",
  "risotto",
  "pasta",
]);
console.log(orderset);
console.log(orderset.size);
console.log(orderset.has("pizza"));
console.log(orderset.has("bread"));
orderset.add("garlic bread");
orderset.add("garlic bread");
orderset.delete("risotto");
orderset.clear();

//example
let staff = ["waiter", "cheff", "waiter", "manager", "cheff", "manager"];
const uniqueStaff = new Set(staff);
console.log(...uniqueStaff);
*/

/**************************************************** */
/*
const properties = Object.keys(openingHours); //it will return the array of keys that are presenty in that specific object
console.log(properties);
let str = `we are open for ${properties.length} days`;
for (let day of properties) {
  str += ` ${day} `;
}
console.log(str);
*/
/************************************************************** */
/*
 optional chaining
console.log(restaurant.openingHours.mon?.open); // here open property will be consider only if the properties prior to ? exist otherwise return undefined
let days = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];
for (let day of days) {
  let hours = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`on ${day} we open at ${hours}`);
}
console.log(restaurant.orderPasta?.(0, 3, 2) ?? "method does not exist");
console.log(restaurant.orderhappines?.(0, 2) ?? "method does not exist");
*/

/******************************************************** */
/*
// for of loop
for (let items of menu) {
  console.log(items);
}
console.log(...menu.entries());
for (let [i, el] of menu.entries()) {
  console.log(`${i}:${el}`);
}
*/

////////////////////////////////////////////////////////////////////
/*
const rest1 = {
  name: "la pizza",
  numguest: 10,
};
const rest2 = {
  name: "la pasta",
  owner: "raghav",
};

 rest1.numguest = rest1.numguest || 20;
 rest2.numguest = rest2.numguest || 20;
 console.log(rest1);
 console.log(rest2);

 JUST LIKE WE WRITE K+=1 TO WRITE K=H+1 WE CAN WRITE rest1.numguest ||=20 to write rest1.numguest=rest1.numguest||20

 rest1.numguest ||= 20;
 rest2.numguest ||= 20;
 console.log(rest1);
 console.log(rest2);

 similarly

rest1.numguest &&= 20;
rest2.numguest &&= 20;
console.log(rest1);
console.log(rest2); 

similarly
rest1.numguest ??= 20;
rest2.numguest ??= 20;
console.log(rest1);
console.log(rest2);
*/
////////////////////////////////////////////////////////////////////////////////////////
/*
 (or operator ke saath agar humne koi datatype liya h (other than boolean) than if the fisrt one is true value then we get the first value as it is otherwise it will go second  )

 or operation can be performed on any datatype can return any datatype or short circuiting
 console.log(3 || "jonas");
 console.log("" || "jonas");
 console.log(true || false);
 console.log(undefined || null);
 console.log("" || 0 || "hello" || 2 || null);

const guest1 = restaurant.numguest ? restaurant.numguest : 10;
const guest2 = restaurant.numguest || 23;
console.log(guest1);
console.log(guest2);

// and operation phele false value return kr dega aage dekhta hi nhi h pr agar koi falsy value nhi h to wo last value return krega
console.log("jonas" && 23 && null && 0);

knowledge collasing operator(??) is very similar to or operator

*/

/*
// SPREAD operator(...) is used in right side of assignment operator

const arr = [1, 2, ...[4, 5, 6]];

// rest operator is used left side of assignment operator destructuring ke waqt kam aata h
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
//rest wale function m multiple arguments pass kr skte h fir wo ek single array me ho jayenge

let [Pizza, , Risotto, ...others] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];
const addition = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 10];
addition(1, 2, 3);
addition(1, 2, 3, 5, 9);
addition(1, 2, 3, 5, 7, 8, 10, 9);
addition(...arr1);
const ingredient = ["cheese", "corn", " margreta", " jellypie"];
const ing1 = ["cheese"];
restaurant.orderpizza(...ing1);
restaurant.orderpizza(...ingredient);
*/

/*


// SPREAD OPERATOR (...)
let arr = [1, 2, 3];
let newArr = [4, 5, arr[2], arr[1], arr[0]];
let copyNewarr = [4, 5, ...arr];

let mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// join two arrays
let menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// REAL WORLD EXAMPLE
let ingredient = [
  prompt(`enter ing1`),
  prompt(`enter ing2`),
  prompt(`enter ing3`),
];
restaurant.orderPasta(ingredient[0], ingredient[1], ingredient[2]);
restaurant.orderPasta(...ingredient);

// NOW A DAYS OBJECTS CAN ALSO USE SPREAD OPERATOR;

let newRestraunt = { foundedIn: 1998, ...restaurant, foundedby: "raghav" };
console.log(newRestraunt);
console.log(restaurant);

newRestraunt.name=indian;
// YAH  PR JO NEW RETRAURANT BANAYA H WO COPY BNI H RESTRAU KI ISLIE AGAR KOI CHANGE NEWRESTRAU M HOGA TO WO RESTAU ME REFLECT NHI HOGA AND VIVE VERSA.
// iterables : strings array sets maps but not obj

*/

/*  object destructuring  ...
let { name, categories, openingHours } = restaurant;
 console.log(name, categories, openingHours);
 const {
   name: restaurantName,
   openingHours: hours,
   categories: tags,
 } = restaurant;
 console.log(restaurantName, hours, tags);

 const { menu = [], starterMenu: starters = [] } = restaurant;
 console.log(menu, starters);

 //mutating value
 let a = 111;
 let b = 222;
 console.log(a, b);

 let obj = { a: 1, b: 2, c: 3 };
 ({ a, b } = obj);
 console.log(a, b);

console.log(openingHours);
const {
  fri: { open: o, close: c },
} = openingHours;

console.log(o, c);

/*
const arr = [1, 2, 3];

const x = arr[0];
const y = arr[1];
const z = arr[2];

let [a, b, c] = arr;
console.log(a, b, c);
*/

/*

let [starters, mainCourse] = restaurant.order(1, 2);
console.log(starters, mainCourse);

*/

/*
let [primary, , secondary] = restaurant.categories;
console.log(primary, secondary);

swapping of variable 

let temp = primary;
primary = secondary;
secondary = temp;
console.log(primary, secondary);

[primary, secondary] = [secondary, primary];
console.log(primary, secondary);
*/

/*

[a = 1, b = 1, c = 1] = [2, , 2];
console.log(a, b, c);

*/
