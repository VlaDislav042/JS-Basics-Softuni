function data(input) {
    let firstTime=Number(input[0]);
    let secondTime=Number(input[1]);
    let thirdTime=Number(input[2]);

    let totalTimeInSec=firstTime+secondTime+thirdTime;

    let timeInMin=Math.floor(totalTimeInSec/60);
    let timeInSec= totalTimeInSec%60;

    if (timeInSec<10) {
        console.log(`${timeInMin}:0${timeInSec}`)
    } else{
        console.log(`${timeInMin}:${timeInSec}`)
    }
    
}
data(['50','50','49'])