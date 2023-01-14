function data(input) {
    let recordInSec=Number(input[0]);
    let distanceInM=Number(input[1]);
    let timeForM=Number(input[2]);

    let secForDistance=distanceInM*timeForM;

    let slowTime=(Math.floor(distanceInM/50))*30;

    let allTime=secForDistance+slowTime;

    if (recordInSec>allTime) {
        console.log(`Yes! The new record is ${allTime.toFixed(2)} seconds.`);
    }else{
        console.log(`No! He was ${(allTime-recordInSec).toFixed(2)} seconds slower.`);
    }
}
data(["1377",
"389",
"3"])
