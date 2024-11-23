"use strict"; // it increases the compatibility of the code jaise ki error aane pr message dedega ki yha pr galti h and reserve word bhi jyada kr deta h

/*
----------------function part 1 --------------

function logger()
{
    console.log(`hello world `);
    
}
logger();
logger();
logger();
logger();
logger();


function fruitProcessor(apple,orange) {
    console.log(apple,orange);
    let juice=`Juice with ${apple} apple and ${orange} orange`;
    return juice;
}
let appleJuice=fruitProcessor(5,0);
console.log(appleJuice);
let appleOrangeJuice=fruitProcessor(4,6);
console.log(appleOrangeJuice);
*/

/*
----------------function part 2 --------------

// FUNCTION DECLARATION 

// FUCTION DECLARATION M DEFINATION SE PHLE FUNCTION CALL KR SKTE H 
function calcAge(birthYear)
{
    return 2024-birthYear;   
}

const age1=calcAge(2005);

// FUNCTION EXPRESSION
// FUNCTION EXPRESSION HMESHA FUNCTION DEFINITAION KE BAD CALL HOGA

const calcAge2=function(birthYear){
    return 2024-birthYear;
}
const age2=calcAge2(2005);
console.log(age1,age2);
 


*/

/*
----------------ARROW FUNCTIONS --------------
 
SYNTAX for single line code : ARGUMENT => VALUE TO BE RETURNED ;
const calcAge3= birthYear=>2024-birthYear;
const age3=calcAge3(2005);
console.log(age3);
 
 
const yearUntilRetirement= (birthYear,firstName)=>{
    let age=2024-birthYear;
    let retirement=65-age;
    return `${firstName} retires in ${retirement} years`;
   
}
console.log(yearUntilRetirement(2005,'raghav'));
console.log(yearUntilRetirement(1995,'pranjal'));
       
*/

/*
----------------function inside other function ------------------------------------------
   

function fruitPiece(fruit){
return fruit*4;

}
function fruitProcessor(apple,orange) {
const applePieces=fruitPiece(apple);
const orangePiece=fruitPiece(orange);
let juice=`Juice with ${applePieces} pieces of apple and ${orangePiece} pieces of  orange`;
return juice;
}

console.log(fruitProcessor(5,4));


*/
/*

----------------------------------------ARRAY----------------------------------------------

// !!!! EVEN THOUGH YE EK AGAR HUMNE ARRAY KO CONST SE DECLARE KRA H LEKIN HUM AGAR KISI INDEX PR VALUE CHANGE KRTE H TO WO ARRAY ME CHANGE HO JATA H AND PERMANANTLY REFLECT KR DETA H....

const friends=['arjun ', 'akashdeep','krish','garvit'];

const friends2=new Array('arjun ', 'akashdeep','krish','garvit');
console.log(friends);
console.log(friends2);

const intro=['raghav' ,'mittal',2024-2005,2310068];
console.log(`hello my name is ${intro[0]} ${intro[1]} . I am ${intro[2] } years old . My student number is ${intro[intro.length-1]}`);

*/

// Array_name.push()  ---> is used to add an elemnet to the end of array and retuirns the length of new array
// array_name.unshift()   ----> used to insert element to the begining of array and it returns the length of new array
// arrayName.pop() deletes the last elemnet in array and retruns the element that has been deleted
// arrayName.shift() deletes the first elemnet in array and retruns the element that has been deleted
// arrayName.indexof('argument') returns the index of the argument in the array and if the argumnet is not present then its returns -1..
// arrayName.includes("argument") returns true if the argument is present in array and false if not present and its is strict equality check..

// const intro=['raghav' ,'mittal',2024-2005,2310068];
// let c=intro.push('raghav')
// console.log(c);
// intro.unshift("hello");
// console.log(intro);

// let pop1=intro.pop();
// console.log(intro,pop1);

/*                                                OBJECTS                                */

/*
                                THIS IS HOW OBJECT IS DECLARED
const intro={
    firstName:'Raghav',
    lastName:'Mittal',
    age:2024-2005,
    profession:'student',
    friends:['raghav','krish','arjun','akash']
};

// HUM OBJECT KE KEY VALUE PAIR KO OUTSIDE  THE BLOCK BHI DECLARE KR SKTE H 
intro.insta=_._raghav;

*/

/*
THIS IS OBJECT KO DISPLAY KRNE KE TAREKE

const intro={
    firstName:'Raghav',
    lastName:'Mittal',
    age:2024-2005,
    profession:'student',
    friends:['raghav','krish','arjun','akash']
};

// IN ORDER TO PRINT A OBJECT VALUE WE CAN USE DOT(.) OR SQUARE BRACKET ([]) NOTATIONS
// DOT WALE TAREKA SIMPLE H
console.log(intro.firstName);
console.log(intro.lastName);
console.log(intro.age);
console.log(intro.profession);
console.log(intro.friends);

// SQUARE BRACKET WALE M SQUARE BRACKET KE ANDER STRING AATA H 

console.log(intro['firstName']);
console.log(intro['last'+'Name']);
console.log(intro[prompt('WHAT DO YOU WANT TO PRINT ')]);
console.log(intro['profession']);
console.log(intro['friends']);

//                             CHALLENGE 

console.log(`${intro['firstName'] } has ${intro['friends'].length} and his besfriend is ${intro.friends[0]}`)
-------------------------------------------------------------------------------------------
*/

// HUM OBJECT KE ANDER EK FUNCTION EXPRESSION BHI BNA SKTE H

// const intro={
// firstName:'Raghav',
// lastName:'Mittal',
// birthYear:2005,
// profession:'student',
// friends:['raghav','krish','arjun','akash'],

// calcAge:function(birthyear){
//     return 2024-birthYear;   }

// calcAge:function(){
//     return 2024-this.birthYear;         //yha pr this jo h ye indicate kkra h ki humne jo birthyear lena h wo object ke ander jo defined h wo hi lena h
//};

//console.log(intro.calcAge());
// const intro={
//     firstName:'Raghav',
//     lastName:'Mittal',
//     birthyear:2005,
//     profession:'student',
//     friends:['raghav','krish','arjun','akash'],
//     hasDiversLisence:false,
//     calcAge:function(){
//         this.age=2024-this.birthyear;
//         return this.age;
//     }
// };
// console.log(`${intro.firstName} is a ${intro.calcAge()} year old ${intro.profession} and he has ${(intro.hasDiversLisence?'a':'no')} drivers lisence `);

//  LOOPING

// for(initial condition; final condition;updation)
// {
//     body;
// }

for (let i = 1; i <= 10; i++) {
  console.log(`${i}`);
}
let j = 0;
while (j <= 10) {
  console.log(j);
  j++;
}
