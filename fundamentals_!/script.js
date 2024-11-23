// let js='javascript'   // let can be used to dcelare a variable as like we have used it to create a js vraiable..
// console.log(45+15+55-100+25);    // console.log() --> used to print on console webpage....

// javascript me agar variable declare krna h and wo variable 2 teen word ka h to phela word pa pehla letter small hoga baki word a first letter capital and koi space nhi ayega


// let firstName='raghav';
// let lastName='mittal';
// console.log(firstName);
// console.log(lastName);

// console.log(24+3+54-23-45);



 
// jaise ki worldfirstletter is wrong worldFirstLetter is right 

// variable name set krne ke lie rules hote h wo almost har language m same hote h like ... variable name can not be keyword , it can not start with numbers , it should be unique, only $ and _ are alloweds in variable name in javascript.. 

// we should try to avoid using the variable srating with a uppercase letter..

// if we have constant variable then write it  completely in uppercase
// let PI=3.1415;


// variable name aisa hona chahiye jise pdh kr smjh aa jaye ki wo kya stoere krra h apne ander
// console.log(mySecondJob);
// let myFirstJob='student';
// let mySecondJob='programmer';
// console.log(myFirstJob);

/* 

there are 7 datatypes in javascript 
1 -> number
2-> string
3-> boolean
4-> null
5-> undefined
6-> bigint 
7-> symbol

javascript is about dyanamic lamguage that means we do not have to declare the type of data we are storing it automatically understands and do the operations as per the data type

*/

/*

let lastName='mittal';
let age=19;
let happy=true;
console.log(lastName);
console.log(age);
console.log(happy);
console.log(typeof lastName);
console.log(typeof age);
console.log(typeof happy);

JAVASCRIPT KA EK GLITCH H KI AGAR HUM CONSOLE.LOG(TYPEOF NULL ) KRTE H TO WO OBJWCT RETURN KRTA H 

*/
/*
when we declare a variable using LET then we can change the value that is stored in the variable 
but when we use CONST to declare a variable then that thing is constant means it cannot be changed ;
aur VAR to phele use hota tha ab nhi hota pr ye LET ke similar hota h thoda thoda


let age=45;
age=32;
const birthYear=2005;
const ko initiliase krna  pdta h hamesha .... 
ye ek acchi practice hoti h ki hum const se jayada declare kr and let se kum because jitna jyada let hoga utna jyada value chang hone ke chances rahenge jiski wajah se error aan ke chances jyada h...

*/

/*
const now=2024;
const raghavAge=now-2004;
const arjunAge=now-2000;
console.log(raghavAge,arjunAge);
console.log(arjunAge**2,raghavAge/10);

//  ** ka matlab hota h power

const firstName='raghav';
const lastName='mittal';
console.log(firstName + ' ' + lastName);
let x=10+5 ; // 15
console.log(x);
x+=15  //x=x+15
console.log(x);
x*=5 // x=x*5
console.log(x);
console.log(raghavAge>=arjunAge);


*/

/************************ OPERATOR PRECEDENCE ***************************************/

/*

let firstName='RAGHAV';
let age=20;
let job='student';
console.log(`I'm ${firstName} a ${age} year old ${job}`);

*/
/*
let year=2024-2005;
if(year>=18)
{
    console.log(`you are eligible for driving lisence`);
}
else
{
    console.log(`you are too young..... wai for ${18-year} year`);
}

*/

/*

type conversion me hum force fully ek datadtype ko dusre m convert krte h jaise number ko string m string ko number me

let year=2005;
console.log(typeof year, year);
year=String(year);
console.log(typeof year, year);


type coersion m automatically ho jata h nd generally jab string and number ek saath plus operation me ho to wo string m convert hota h ... 
agar string or number - * / me ho to wo number m hota h and ye sab left to right hote hue chalta h


console.log('i am'+19+'years  old');
console.log('120'+25 );
console.log(25+'123');
console.log('1'-2);
console.log('1'*'2');
console.log(1+1+1+'1');
console.log('1'+'1'+1);
console.log('1'+'1'-1);

*/

/*
 there are five values that will become false if converted to boolean they are ..... 
 1-> 0
 2->' '
 3->undefined 
 4-> null
 5-> NaN

 rest all the values fill be true if converted to boolean 

 console.log(Boolean(''));
 console.log(Boolean(0));
 console.log(Boolean(NaN));
 console.log(Boolean(null));
 console.log(Boolean(undefined));
 console.log(Boolean(1));
 console.log(Boolean('a'));
 console.log(Boolean(2));
 console.log(Boolean('     '));
 
  let money=0;
  if(money)
  {
     console.log("don't spend it all ");
     
  }
  else{
     console.log('you should get a job');
  }
 
  let height;
  if(height)
   {
      console.log('your height is defined');
      
   }
   else
  {
      console.log('your hight is undefined ');
      
  }
 */

  /*
  
"===" is a strict check mtlb wo datatype or value dono check krta h and agar equal hote h to one return krta and agar false hote h to zero 
 console.log(1==='1');

" == " ye keval value check krta h 
console.log(1=='1');
  */



// AGAR USER SE INPUT LENA H TO PROMPT USE KTRWH

// const favouriteNumber=prompt('enter your favoyrite number');
// console.log(favouriteNumber,typeof favouriteNumber);

// AND OR NOT SAB KE SAB CPP WALE H  KUCH NYA NHI H
// IF ELSE IF ELSE BHI CPP WALA H

/*

const n=45;
switch(n)
{
    case 45:
        console.log(`it's 45`);
     
        break;
    case 8:
        console.log(`it's 8`);
        break;
    case 9:
        console.log(`its 9`);
        break;
    default:
        console.log(`its not mentioned `);
        break;
        
}

*/

// TERNARY OPERATOR

// EXPRESSION ? STATEMENT 1 :STATEMENT 2 ;

// AGAR EXPRESSION TRUE H TO STATEMNET 1 WILL EXECUTE ELSE STATEMENT 2 WILL

let age=19;
age>=20?console.log(`statement will elxecute is exprsiion is true `):console.log(`statement 222 will elxecute is exprsiion is false `);

