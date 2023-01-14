function data(input){
    let height=Number(input[0]);
    let width=Number(input[1]);
    let coridor=1;
    let deskHeight=0.7;
    let deskWidth=1.2;

    let widthAfterCoridor=width-coridor;
    
    let desksOnRow=Math.floor(widthAfterCoridor/deskHeight);
    let rows=Math.floor(height/deskWidth);
    let countDesks=desksOnRow*rows-3;


    console.log(countDesks);
}
data(['8.4','5.2'])