function data(input){
    let chickenMenu=Number(input[0]);
    let fishMenu=Number(input[1]);
    let vegeMenu=Number(input[2]);
    let delivery=2.50;

    let chickenMenuOrder=chickenMenu*10.35;
    let fishMenuOrder=fishMenu*12.40;
    let vegeMenuOrder=vegeMenu*8.15;

    let allMenuOrder=chickenMenuOrder+fishMenuOrder+vegeMenuOrder;
    let dessert=0.2*allMenuOrder;
    let final=delivery+dessert+allMenuOrder;

    console.log(final);

}
data(["2 ",
"4 ",
"3 "]
);