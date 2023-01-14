function data(input){
    let pensPackets=Number(input[0]);
    let markersPackets=Number(input[1]);
    let literCleaner=Number(input[2]);
    let discount=Number(input[3]);
    let discountProcent=discount/100;

    let pensPackets1=pensPackets*5.80;
    let markersPackets1=markersPackets*7.20;
    let literCleaner1=literCleaner*1.20;
    let finalPrice=literCleaner1+markersPackets1+pensPackets1;
    let finalPriceDiscount=finalPrice-(finalPrice*discountProcent);

    console.log(finalPriceDiscount);
    console.log(finalPrice);

}
data(["2 ",
"3 ",
"4 ",
"25 "]
);