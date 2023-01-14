function data(input){
    let priceKgVegetable=Number(input[0]);
    let priceKgFruits=Number(input[1]);
    let allVegetable=Number(input[2]);
    let allFruits=Number(input[3]);

    let finalVegetable=priceKgVegetable*allVegetable;
    let finalFruits=priceKgFruits*allFruits;

    let allInLv=finalVegetable+finalFruits;

    let allInEuro=allInLv/1.94;

    let all=allInEuro.toFixed(2);

    console.log(all);
}
data(['0.194','19.4','10','10']);