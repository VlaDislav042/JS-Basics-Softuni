function data(input){
    let worldRecord=Number(input[0]);
    let distanceInM=Number(input[1]);
    let timeforM=Number(input[2]);

    let swimDistance=distanceInM*timeforM;
    let waterResistance=Math.floor(distanceInM/15);
    let slow=waterResistance*12.5;

    let allTime=swimDistance+slow;
    let diff=Math.abs(allTime-worldRecord);
    if(allTime<worldRecord){
        console.log(`Yes, he succeeded! The new world record is ${allTime.toFixed(2)} seconds.`);
    } else{console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);}
    
}
data(["55555.67",
"3017",
"5.03"])
;