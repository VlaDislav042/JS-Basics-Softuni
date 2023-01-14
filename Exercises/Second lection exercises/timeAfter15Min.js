function data(input) {
    let hours=Number(input[0]);
    let minutes=Number(input[1]);

    let totalTimeInMin=(hours*60)+minutes+15;

    let totalHours=Math.floor(totalTimeInMin/60);
    let totalInMin= totalTimeInMin%60;

    

    if(totalHours>23){
        totalHours=0;
    }

    if(totalInMin<10){
        console.log(`${totalHours}:0${totalInMin}`)
    } else{
        console.log(`${totalHours}:${totalInMin}`)
    }

    
}
data(["23", "49"]);