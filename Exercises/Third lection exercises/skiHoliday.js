function data(input) {
    let holidayDays = Number(input[0]);
    let roomDiff = String(input[1]);
    let grade = String(input[2]);
    let holidayNights = holidayDays - 1;

    let priceRoomPerson1 = 18.00;
    let priceApartment1 = 25.00;
    let pricePresidentApa1 = 35.00;

    let priceRoomPerson = priceRoomPerson1 * holidayNights;
    let priceApartment = priceApartment1 * holidayNights;
    let pricePresidentApa = pricePresidentApa1 * holidayNights;

    if (holidayDays < 10) {
        switch (roomDiff) {
            case "room for one person":
                if (grade == "positive") {
                    priceRoomPerson = priceRoomPerson + (priceRoomPerson * 0.25);
                    console.log(priceRoomPerson.toFixed(2));
                } else if (grade == "negative") {
                    priceRoomPerson = priceRoomPerson - (priceRoomPerson * 0.10);
                    console.log(priceRoomPerson.toFixed(2));
                }
                break;
            case "apartment":
                if (grade == "positive") {
                    priceApartment = priceApartment * 0.70;
                    priceApartment = priceApartment + (priceApartment * 0.25);
                    console.log(priceApartment.toFixed(2));
                } else if (grade == "negative") {
                    priceApartment = priceApartment * 0.70;
                    priceApartment = priceApartment - (priceApartment * 0.10);
                    console.log(priceApartment.toFixed(2));
                }
                break;
            case "president apartment":
                if (grade == "positive") {
                    pricePresidentApa = pricePresidentApa * 0.90;
                    pricePresidentApa = pricePresidentApa + (pricePresidentApa * 0.25);
                    console.log(pricePresidentApa.toFixed(2));
                } else if (grade == "negative") {
                    pricePresidentApa = pricePresidentApa * 0.90;
                    pricePresidentApa = pricePresidentApa - (pricePresidentApa * 0.10);
                    console.log(pricePresidentApa.toFixed(2));
                }


        }
    } else if (holidayDays >= 10 && holidayDays <= 15) {
        switch (roomDiff) {
            case "room for one person":
                if (grade == "positive") {
                    priceRoomPerson = priceRoomPerson + (priceRoomPerson * 0.25);
                    console.log(priceRoomPerson.toFixed(2));
                } else if (grade == "negative") {
                    priceRoomPerson = priceRoomPerson - (priceRoomPerson * 0.10);
                    console.log(priceRoomPerson.toFixed(2));
                }
                break;
            case "apartment":
                if (grade == "positive") {
                    priceApartment = priceApartment * 0.65;
                    priceApartment = priceApartment + (priceApartment * 0.25);
                    console.log(priceApartment.toFixed(2));
                } else if (grade == "negative") {
                    priceApartment = priceApartment * 0.65;
                    priceApartment = priceApartment - (priceApartment * 0.10);
                    console.log(priceApartment.toFixed(2));
                }
                break;
            case "president apartment":
                if (grade == "positive") {
                    pricePresidentApa = pricePresidentApa * 0.85;
                    pricePresidentApa = pricePresidentApa + (pricePresidentApa * 0.25);
                    console.log(pricePresidentApa.toFixed(2));
                } else if (grade == "negative") {
                    pricePresidentApa = pricePresidentApa * 0.85;
                    pricePresidentApa = pricePresidentApa - (pricePresidentApa * 0.10);
                    console.log(pricePresidentApa.toFixed(2));
                }

        }
    } else if (holidayDays > 15) {
        switch (roomDiff) {
            case "room for one person":
                if (grade == "positive") {
                    priceRoomPerson = priceRoomPerson + (priceRoomPerson * 0.25);
                    console.log(priceRoomPerson.toFixed(2));
                } else if (grade == "negative") {
                    priceRoomPerson = priceRoomPerson - (priceRoomPerson * 0.10);
                    console.log(priceRoomPerson.toFixed(2));
                }
                break;
            case "apartment":
                if (grade == "positive") {
                    priceApartment = priceApartment * 0.50;
                    priceApartment = priceApartment + (priceApartment * 0.25);
                    console.log(priceApartment.toFixed(2));
                } else if (grade == "negative") {
                    priceApartment = priceApartment * 0.50;
                    priceApartment = priceApartment - (priceApartment * 0.10);
                    console.log(priceApartment.toFixed(2));
                }
                break;
            case "president apartment":
                if (grade == "positive") {
                    pricePresidentApa = pricePresidentApa * 0.80;
                    pricePresidentApa = pricePresidentApa + (pricePresidentApa * 0.25);
                    console.log(pricePresidentApa.toFixed(2));
                } else if (grade == "negative") {
                    pricePresidentApa = pricePresidentApa * 0.80;
                    pricePresidentApa = pricePresidentApa - (pricePresidentApa * 0.10);
                    console.log(pricePresidentApa.toFixed(2));
                }

        }
    }
}
data(["30",

    "president apartment",

    "negative"]);