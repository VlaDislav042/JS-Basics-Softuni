function data(input) {
    let poolArea=Number(input[0]);
    let firstPipeLimit=Number(input[1]);
    let secondPipeLimit=Number(input[2]);
    let missingHours=Number(input[3]);

    let firstPipeWater=firstPipeLimit*missingHours;
    let secondPipeWater=secondPipeLimit*missingHours;
    let allWater=firstPipeWater+secondPipeWater;

    let procentWaterPool=allWater/poolArea*100;
    let procentFirstPipe=firstPipeWater/allWater*100;
    let procentSecondPipe=secondPipeWater/allWater*100;

    let wastedWater=Math.abs(allWater-poolArea);

    if (allWater<=poolArea) {
        console.log(`The pool is ${procentWaterPool.toFixed(2)}% full. Pipe 1: ${procentFirstPipe.toFixed(2)}% Pipe 2: ${procentSecondPipe.toFixed(2)}%."`);
    } else{
        console.log(`For ${missingHours.toFixed(2)} hours the pool overflows with ${wastedWater.toFixed(2)} liters.`);
    }
}
data(['100','100','100','2.5'])