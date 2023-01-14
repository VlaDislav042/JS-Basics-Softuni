function data(input) {
    let fruit = String(input[0]);
    let size = String(input[1]);
    let numberSets = Number(input[2]);

    let finalPrice = 0;
    let singlePrice = 0;
    let clientPrice = 0;


    if (size === "big") {
        switch (fruit) {
            case "Watermelon":
                singlePrice = 5 * 28.70;
                clientPrice = numberSets * singlePrice;
                if (clientPrice>=400) {
                    let discount = 0.15 * clientPrice;
                    clientPrice = clientPrice - discount;
                } else if (clientPrice > 1000) {
                    let discount = 0.50 * clientPrice;
                    clientPrice = clientPrice - discount;
                }
                console.log(`${clientPrice.toFixed(2)} lv.`);
                break;
            case "Mango":
                singlePrice = 5 * 19.60;
                clientPrice = numberSets * singlePrice;
                if (1000>=clientPrice>=400) {
                    let discount = 0.15 * clientPrice;
                    clientPrice = clientPrice - discount;
                } else if (clientPrice > 1000) {
                    let discount = 0.50 * clientPrice;
                    clientPrice = clientPrice - discount;
                }
                console.log(`${clientPrice.toFixed(2)} lv.`);
                break;
            case "Pineapple":
                singlePrice = 5 * 24.80;
                clientPrice = numberSets * singlePrice;
                if (1000>=clientPrice>=400) {
                    let discount = 0.15 * clientPrice;
                    clientPrice = clientPrice - discount;
                } else if (clientPrice > 1000) {
                    let discount = 0.50 * clientPrice;
                    clientPrice = clientPrice - discount;
                }
                console.log(`${clientPrice.toFixed(2)} lv.`);
                break;
            case "Raspberry":
                singlePrice = 5 * 15.20;
                clientPrice = numberSets * singlePrice;
                if (1000>=clientPrice>=400) {
                    let discount = 0.15 * clientPrice;
                    clientPrice = clientPrice - discount;
                } else if (clientPrice > 1000) {
                    let discount = 0.50 * clientPrice;
                    clientPrice = clientPrice - discount;
                }
                console.log(`${clientPrice.toFixed(2)} lv.`);
                break;
            default:
                console.log("Error");
                break;
        }
    } else if (size === "small") {
        switch (fruit) {
            case "Watermelon":
                singlePrice = 2 * 56;
                clientPrice = numberSets * singlePrice;
                if (1000>=clientPrice>=400) {
                    let discount = 0.15 * clientPrice;
                    clientPrice = clientPrice - discount;
                } else if (clientPrice > 1000) {
                    let discount = 0.50 * clientPrice;
                    clientPrice = clientPrice - discount;
                }
                cconsole.log(`${clientPrice.toFixed(2)} lv.`);
                break;
            case "Mango":
                singlePrice = 2 * 36.66;
                clientPrice = numberSets * singlePrice;
                if (1000>=clientPrice>=400) {
                    let discount = 0.15 * clientPrice;
                    clientPrice = clientPrice - discount;
                } else if (clientPrice > 1000) {
                    let discount = 0.50 * clientPrice;
                    clientPrice = clientPrice - discount;
                }
                console.log(`${clientPrice.toFixed(2)} lv.`);
                break;
            case "Pineapple":
                singlePrice = 2 * 42.10;
                clientPrice = numberSets * singlePrice;
                if (1000>=clientPrice>=400) {
                    let discount = 0.15 * clientPrice;
                    clientPrice = clientPrice - discount;
                } else if (clientPrice > 1000) {
                    let discount = 0.50 * clientPrice;
                    clientPrice = clientPrice - discount;
                } 
                console.log(`${clientPrice.toFixed(2)} lv.`);
                break;
            case "Raspberry":
                singlePrice = 2 * 20;
                clientPrice = numberSets * singlePrice;
                if (1000>=clientPrice>=400) {
                    let discount = 0.15 * clientPrice;
                    clientPrice = clientPrice - discount;
                } else if (clientPrice > 1000) {
                    let discount = 0.50 * clientPrice;
                    clientPrice = clientPrice - discount;
                }
                console.log(`${clientPrice.toFixed(2)} lv.`);
                break;
            default:
                console.log("Error");
                break;
        }
    }


}
data(["Watermelon",
    "big",
    "4"])

