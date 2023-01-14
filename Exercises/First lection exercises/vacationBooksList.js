function data(input){
    let allPages=Number(input[0]);
    let pagesPerHour=Number(input[1]);
    let days=Number(input[2]);

    let fullTimeReading=allPages/pagesPerHour;
    let necessaryHours=fullTimeReading/days;

    console.log(necessaryHours);
}
data(["212","20","2"]);
