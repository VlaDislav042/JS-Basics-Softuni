function onTimeForTheExam(input) {
    let hourExam = Number(input[0]);
    let minuteExam = Number(input[1]);
    let hourArival = Number(input[2]);
    let minuteArival = Number(input[3]);
 
    let totalExamMinutes = (hourExam * 60) + minuteExam;
    let totalArivalMinutes = (hourArival * 60) + minuteArival;
    let timeDiff = totalExamMinutes - totalArivalMinutes;
 
    let hours = Math.floor(timeDiff / 60);
    let minutes = timeDiff % 60;
    let lateH = Math.ceil(timeDiff / 60);
    let lateM = timeDiff % 60;
 
    if (timeDiff >= 0 && timeDiff <= 30) {
        if (timeDiff == 0) {
            console.log("On time");
        } else {
            console.log("On time");
            console.log(`${timeDiff} minutes before the start`)
        }
    }
 
    else if (timeDiff > 30 && timeDiff <= 59) {
        console.log("Early");
        console.log(`${minutes} minutes before the start`);
    } else if (timeDiff >= 60) {
        if (minutes < 10){
            console.log("Early");
            console.log(`${hours}:0${minutes} hours before the start`);
        } else {
            console.log("Early");
            console.log(`${hours}:${minutes} hours before the start`);
        }
 
    }
 
    else if (timeDiff < 0) {
        console.log("Late")
         if (timeDiff <= -1 && timeDiff >= -59) {
            console.log((`${Math.abs(timeDiff)} minutes after the start`));
        } else {
            console.log((`${Math.abs(lateH)}:${Math.abs(lateM)} hours after the start`));
        }
    }
 
}
onTimeForTheExam(["9", "00", "7", "55"]);