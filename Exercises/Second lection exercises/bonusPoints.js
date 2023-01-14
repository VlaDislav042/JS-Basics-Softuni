function data(input) {
    let points=Number(input[0]);
    let bonus=0;

    if(points<=100){
        bonus=5;
    } else if(points>100 && points<=1000){
        let bonusPointsPrecent=0.2;
        bonus=points*bonusPointsPrecent;
    } else if(points>=1000){
        let bonusPointsPrecent=0.1;
        bonus=points*bonusPointsPrecent;
    }

    if(points%2==0){
        bonus=bonus+1;
    } else if(points%10==5){
        bonus=bonus+2;
    }

    let allPoints=bonus+points;
    
    console.log(bonus);
    console.log(allPoints);
}
data(['15875']);