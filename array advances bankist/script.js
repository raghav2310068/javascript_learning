"use strict";
const eurToUsd = 1.1;

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displaymovements = function (account) {
  containerMovements.innerHTML = "";
  account.movements.forEach(function (mov, i) {
    let status = mov > 0 ? "deposit" : "withdrawal";
    const html = ` <div class="movements__row">
          <div class="movements__type movements__type--${status}">${
      i + 1
    } ${status}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
// displaymovements(account1.movements);

const createUsername = function (accArr) {
  accArr.forEach(function (accUser) {
    accUser.userName = accUser.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsername(accounts);

const displaySummary = function (account) {
  let totalBalance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${totalBalance} €`;

  let deposits = account.movements
    .filter((mov) => mov > 0)
    .map((mov) => mov)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${deposits} €`;

  let withdrawls = account.movements
    .filter((mov) => mov < 0)
    .map((mov) => mov)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(withdrawls)}€`;

  let intrest = account.movements
    .map((mov) => mov * (account.interestRate / 100))
    .filter((mov) => mov > 1)
    .reduce((acc, mov) => acc + mov, 0);
  // console.log(intrest);

  labelSumInterest.textContent = `${intrest}€`;
};
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (
    currentAccount != undefined &&
    currentAccount.pin === Number(inputLoginPin.value)
  ) {
    console.log("hello");
    displaySummary(currentAccount);
    containerApp.style.opacity="100"
    inputLoginPin.value = inputLoginUsername.value = "";
    inputLoginPin.blur();
    displaymovements(currentAccount);
    
  } //console.log("login");
});
// displaySummary(account1)
// console.log(account1.userName);
// console.log(account2.userName);
// console.log(account3.userName);
// console.log(account4.userName);

const user = "Steven Thomas Williams";
// let userName =
// console.log(userName);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
const arr=['a','b','c','d','e','f','g'];

// slice method ek nayi array bnata h lein jo purani hoti h use change nhi krta 
// arrayname.slice(startingindex,endindx)
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-5));

//splice is similar to slice but the differnce is that ye original wali array me se slice array delete kr deti h ;
// console.log(arr.splice(-2));
// console.log(arr);

// at location negative doge to jo index diya HOGA WO PECHE SE dekhke print kr dega
console.log(arr.at(1));
console.log(arr.at(5));
console.log(arr.at(-1));

// agar kisi array ko string me convert krna h to hum join ka use kr skte h or jo ism parameter pass krenge wo seperatr ka kam krega
console.log(arr.join(','));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for(const [index,mov] of movements.entries()){
  if(mov<0){
    console.log(`${index+1} : you withdraw ${Math.abs(mov)} rupees `);
    
  }
  else{
    console.log(`${index+1} : you deposited ${Math.abs(mov)} rupees `);
  }
}
console.log(`****************for each***************`)
*/
/**
  **************************************  MAP        *********************** 
 // map me har individual element traverse hota h fir ek nayi array form ho jati h
 
 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
 let movementsUsdFor = [];
 
 let movementsUsd = movements.map(function (mov) {
  return mov * eurToUsd;
});

for (let mov of movements) {
  movementsUsdFor.push(mov * eurToUsd);
}

let movementsUsdArrow = movements.map((mov) => mov * eurToUsd);

let movementsDescriptions = movements.map((mov, i) => {
  if (mov < 0) {
    return `${i + 1} : you withdraw ${Math.abs(mov)} rupees `;
    } else {
    return `${i + 1} : you deposited ${Math.abs(mov)} rupees `;
}
});
console.log(movements);
console.log(movementsUsd);
console.log(movementsUsdFor);
console.log(movementsUsdArrow);
console.log(movementsDescriptions);

*/

// FILTER METHOD
// arrname.filter(function(arguments){
//   return condition
// })

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposit = movements.filter(function (mov) {
  return mov > 0;
});
// console.log(deposit);
const withdraw = movements.filter((mov) => mov < 0);
// console.log(withdraw);

// reduce method
// arrayname.reduce(function(accumulator,item,index,array){function})

let balance = movements.reduce((acc, mov) => acc + mov, 0);
// console.log(balance);
