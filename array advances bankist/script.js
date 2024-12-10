'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displaymovements=function(movements){
  containerMovements.innerHTML=""
  movements.forEach(function(mov,i)
  {
  let status=mov>0 ? "deposit":"withdrawal";
  const html=` <div class="movements__row">
          <div class="movements__type movements__type--${status}">${i+1} ${status}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}€</div>
        </div>`
        containerMovements.insertAdjacentHTML("afterbegin",html); 
});
}
displaymovements(account1.movements)

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
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




