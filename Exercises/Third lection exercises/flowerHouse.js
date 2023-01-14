function data(input) {
    let flowers = input[0];
    let amountFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let sum = 0;

    if (flowers == "Roses") {
        let price = 5;
        sum = amountFlowers * price;
        if (amountFlowers > 80) {
            sum = sum * 0.90;
        }
        finalPrice = Math.abs(sum - budget);
        if (budget >= sum) {
            console.log(`Hey, you have a great garden with ${amountFlowers} ${flowers} and ${finalPrice.toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money, you need ${finalPrice.toFixed(2)} leva more.`);
        }
    } else if (flowers == "Dahlias") {
        let price = 3.80;
        sum = amountFlowers * price;
        if (amountFlowers > 90) {
            sum = sum * 0.85;
        }
        finalPrice = Math.abs(sum - budget);
        if (budget >= sum) {
            console.log(`Hey, you have a great garden with ${amountFlowers} ${flowers} and ${finalPrice.toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money, you need ${finalPrice.toFixed(2)} leva more.`);
        }
    } else if (flowers == "Tulips") {
        let price = 2.80;
        sum = amountFlowers * price;
        if (amountFlowers > 80) {
            sum = sum * 0.85;
        }
        finalPrice = Math.abs(sum - budget);
        if (budget >= sum) {
            console.log(`Hey, you have a great garden with ${amountFlowers} ${flowers} and ${finalPrice.toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money, you need ${finalPrice.toFixed(2)} leva more.`);
        }
    } else if (flowers == "Narcissus") {
        let price = 3;
        sum = amountFlowers * price;
        if (120 > amountFlowers) {
            sum = sum * 1.15;
        }
        finalPrice = Math.abs(sum - budget);
        if (budget >= sum) {
            console.log(`Hey, you have a great garden with ${amountFlowers} ${flowers} and ${finalPrice.toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money, you need ${finalPrice.toFixed(2)} leva more.`);
        }
    } else if (flowers == "Gladiolus") {
        let price = 2.50;
        sum = amountFlowers * price;
        if (amountFlowers < 80) {
            sum = sum * 1.20;
        }
        finalPrice = Math.abs(sum - budget);
        if (budget >= sum) {
            console.log(`Hey, you have a great garden with ${amountFlowers} ${flowers} and ${finalPrice.toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money, you need ${finalPrice.toFixed(2)} leva more.`);
        }
    }

}
data(["Roses",

    "55",

    "250"]);