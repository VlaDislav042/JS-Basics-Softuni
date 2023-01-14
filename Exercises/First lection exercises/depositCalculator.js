function depositCalculator(input){
    let deposidSum=Number(input[0]);
    let timeDeposid=Number(input[1]);
    let annualRate=Number(input[2]);

    let finalSum=deposidSum+timeDeposid*((deposidSum*annualRate/100)/12)
    console.log(finalSum);
}
depositCalculator(["200 ",
"3 ",
"5.7 "]
);