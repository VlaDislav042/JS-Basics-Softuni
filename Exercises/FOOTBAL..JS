function data(input) {
    let priceTshirt=Number(input[0]);
    let ballPrice=Number(input[1]);

    let priceShorts=priceTshirt*0.75;
    let priceSocks=priceShorts*0.20;
    let priceShoes=(priceShorts+priceTshirt)*2;

    let all=priceTshirt+priceShorts+priceSocks+priceShoes;
    let discount=all*0.15;
    let finalPrice=all-discount;

    
    if (finalPrice>=ballPrice) {
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${finalPrice.toFixed(2)} lv.`);
    }else{
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${(ballPrice-finalPrice).toFixed(2)} lv. more.`);
    }
}
data(['25','100']);