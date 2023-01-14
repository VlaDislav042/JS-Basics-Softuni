function data(input) {
    let weightPackage = Number(input[0]);
    let service = String(input[1]);
    let distance = Number(input[2]);

    switch (service) {
        case "standard":
            if (weightPackage<1) {
                let price = distance * 0.03;
                console.log(`The delivery of your shipment with weight of ${weightPackage.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`);
            }
             else if (weightPackage > 1 && weightPackage < 10) {
                let price = distance * 0.05;
                console.log(`The delivery of your shipment with weight of ${weightPackage.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`);
            } else if (weightPackage >= 10 && weightPackage < 40) {
                let price = distance * 0.10;
                console.log(`The delivery of your shipment with weight of ${weightPackage.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`);
            } else if (weightPackage >= 40 && weightPackage < 90) {
                let price = distance * 0.15;
                console.log(`The delivery of your shipment with weight of ${weightPackage.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`);
            } else if (weightPackage >= 90 && weightPackage < 150) {
                let price = distance * 0.20;
                console.log(`The delivery of your shipment with weight of ${weightPackage.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`);
            }
            break;
        case "express":
            if (weightPackage<1) {
                let price = distance * 0.03;
                let priceKg=0.03*0.80;
                let priceKm=priceKg*weightPackage;
                let allPrice=distance*priceKm;
                let finalPrice=price+allPrice;
                console.log(`The delivery of your shipment with weight of ${weightPackage.toFixed(3)} kg. would cost ${finalPrice.toFixed(2)} lv.`);
            }
             else if (weightPackage > 1 && weightPackage < 10) {
                let price = distance * 0.05;
                let priceKg=0.05*0.40;
                let priceKm=priceKg*weightPackage;
                let allPrice=distance*priceKm;
                let finalPrice=price+allPrice;
                console.log(`The delivery of your shipment with weight of ${weightPackage.toFixed(3)} kg. would cost ${finalPrice.toFixed(2)} lv.`);
            } else if (weightPackage >= 10 && weightPackage < 40) {
                let price = distance * 0.10;
                let priceKg=0.10*0.05;
                let priceKm=priceKg*weightPackage;
                let allPrice=distance*priceKm;
                let finalPrice=price+allPrice;
                console.log(`The delivery of your shipment with weight of ${weightPackage.toFixed(3)} kg. would cost ${finalPrice.toFixed(2)} lv.`);
            } else if (weightPackage >= 40 && weightPackage < 90) {
                let price = distance * 0.15;
                let priceKg=0.15*0.02;
                let priceKm=priceKg*weightPackage;
                let allPrice=distance*priceKm;
                let finalPrice=price+allPrice;
                console.log(`The delivery of your shipment with weight of ${weightPackage.toFixed(3)} kg. would cost ${finalPrice.toFixed(2)} lv.`);
            } else if (weightPackage >= 90 && weightPackage < 150) {
                let price = distance * 0.20;
                let priceKg=0.20*0.01;
                let priceKm=priceKg*weightPackage;
                let allPrice=distance*priceKm;
                let finalPrice=price+allPrice;
                console.log(`The delivery of your shipment with weight of ${weightPackage.toFixed(3)} kg. would cost ${finalPrice.toFixed(2)} lv.`);
            }
        default:
            break;
    }
}
data(["87",
"express",
"130"]);