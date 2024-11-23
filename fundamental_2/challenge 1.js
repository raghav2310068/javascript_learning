'use strict';
let calcAverage=(score1,score2,score3)=>((score1+score2+score3)/3);
const scoreDolphins=calcAverage(44,23,71);
const scoreKoalas=calcAverage(65,54,49)

 const checkWinner=function (avgDoplphins,avgKoalas){
    if(avgKoalas>=2*avgDoplphins){
        console.log(`koalas win (${avgKoalas} vs ${avgDoplphins})`);
    }
    else if(avgDoplphins>=2*avgKoalas){
        console.log(`dolphins win (${avgDoplphins} vs ${avgKoalas})`);
    }
    else{
        console.log(`No team wins...`)
    }
    
}
checkWinner(scoreDolphins,scoreKoalas);