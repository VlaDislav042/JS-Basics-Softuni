function data(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = input[2];

    let boatPrice = 0;


    if (season == "Spring") {
        boatPrice = 3000;
        if (fishermen % 2 == 0) {
            boatPrice = boatPrice * 0.95;
        }
        if (fishermen <= 6) {
            boatPrice = boatPrice * 0.90;
        } else if (7 <= fishermen && fishermen <= 11) {
            boatPrice = boatPrice * 0.85;
        } else if (fishermen >= 12) {
            boatPrice = boatPrice * 0.75;
        }
        let diff = Math.abs(boatPrice - budget);
        if (budget >= boatPrice) {
            console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
        }
    } else if (season == "Summer") {
        boatPrice = 4200;
        if (fishermen % 2 == 0) {
            boatPrice = boatPrice * 0.95;
        }
        if (fishermen <= 6) {
            boatPrice = boatPrice * 0.90;
        } else if (7 <= fishermen && fishermen <= 11) {
            boatPrice = boatPrice * 0.85;
        } else if (fishermen >= 12) {
            boatPrice = boatPrice * 0.75;
        }
        let diff = Math.abs(boatPrice - budget);
        if (budget >= boatPrice) {
            console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
        }
    } else if (season == "Autumn") {
        boatPrice = 4200;
        if (fishermen <= 6) {
            boatPrice = boatPrice * 0.90;
        } else if (7 <= fishermen && fishermen <= 11) {
            boatPrice = boatPrice * 0.85;
        } else if (fishermen >= 12) {
            boatPrice = boatPrice * 0.75;
        }
        let diff = Math.abs(boatPrice - budget);
        if (budget >= boatPrice) {
            console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
        }
    } else if (season == "Winter") {
        boatPrice = 2600;
        if (fishermen % 2 == 0) {
            boatPrice = boatPrice * 0.95;
        }
        if (fishermen <= 6) {
            boatPrice = boatPrice * 0.90;
        } else if (7 <= fishermen && fishermen <= 11) {
            boatPrice = boatPrice * 0.85;
        } else if (fishermen >= 12) {
            boatPrice = boatPrice * 0.75;
        }
        let diff = Math.abs(boatPrice - budget);
        if (budget >= boatPrice) {
            console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
        }
    }
}
data(["2000", "Winter", "13"]);