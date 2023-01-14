function data(input){
    let plastic=Number(input[0]);
    let paint=Number(input[1]);
    let thinnerPaint=Number(input[2]);
    let workingHours=Number(input[3]);
    let plasticBacks=0.40;

    let sumPlastic=(plastic+2)*1.50;
    let sumPaint=(paint*1.1)*14.50;
    let sumThinnerPaint=thinnerPaint*5.00;

    let sumAll=sumPlastic+sumPaint+sumThinnerPaint+plasticBacks;
    let sumAllWithWorking=(sumAll*0.3)*workingHours;
    let sumFinale=sumAll+sumAllWithWorking;

    console.log(sumFinale);
   
}
data(["10 ",
"11 ",
"4 ",
"8 "]
);