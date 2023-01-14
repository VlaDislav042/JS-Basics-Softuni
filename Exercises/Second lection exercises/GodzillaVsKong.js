function data(input){
    let Budget=Number(input[0]);
    let people=Number(input[1]);
    let clothesForPeople=Number(input[2]);
    if(people>150){
        let discount=clothesForPeople*0.1;
        clothesForPeople=clothesForPeople-discount;
    }
    let decor=Budget*0.1;
    let sumForClothes=people*clothesForPeople;
    let sumForFilming=decor+sumForClothes;
    let diff=Math.abs(sumForFilming-Budget);

    if(sumForFilming>Budget){
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    } else{
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
    
}
data(["9587.88",
"222",
"55.68"])

;
