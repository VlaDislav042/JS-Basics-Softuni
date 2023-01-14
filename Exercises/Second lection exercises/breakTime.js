function data(input) {
    let nameSeries=input[0];
    let episodeTime=Number(input[1]);
    let breakTime=Number(input[2]);

    let lunchTime=breakTime/8;
    let chillTime=breakTime/4;
    let freeTime=breakTime-lunchTime-chillTime;
    let diff=Math.abs(episodeTime-freeTime);
    if(freeTime>=episodeTime){
        console.log(`You have enough time to watch ${nameSeries} and left with ${Math.ceil(diff)} minutes free time.`);
    } else{
        console.log(`You don't have enough time to watch ${nameSeries}, you need ${Math.ceil(diff)} more minutes.`);
    }
}
data(["Teen Wolf",
"48",
"60"])
;
