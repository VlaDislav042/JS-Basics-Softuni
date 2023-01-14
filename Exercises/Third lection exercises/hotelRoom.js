function data(input) {
    let month = input[0];
    let countNights = Number(input[1]);

    let studio = 0;
    let flat = 0;
    let studioPrice = 0;
    let flatPrice = 0;

    if (month == "May" || month == "October") {
        studio = 50;
        flat = 65;
        studioPrice = studio * countNights;
        flatPrice = flat * countNights;
        if (countNights >= 7 && countNights <= 14) {
            studioPrice = studioPrice * 0.95;
            console.log(`Apartment: ${flatPrice.toFixed(2)} lv.`);
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
        } else if (countNights >= 14) {
            studioPrice = studioPrice * 0.70;
            flatPrice = flatPrice * 0.90;
            console.log(`Apartment: ${flatPrice.toFixed(2)} lv.`);
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
        }
    } else if (month == "June" || month == "September") {
        studio = 75.20;
        flat = 68.70;
        studioPrice = studio * countNights;
        flatPrice = flat * countNights;
        if (countNights >= 7 && countNights <= 14) {
            console.log(`Apartment: ${flatPrice.toFixed(2)} lv.`);
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
        } else if (countNights > 14) {
            studioPrice = studioPrice * 0.80;
            flatPrice = flatPrice * 0.90;
            console.log(`Apartment: ${flatPrice.toFixed(2)} lv.`);
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
        }
    }else if (month == "July" || month == "August"){
        studio = 76;
        flat = 77;
        studioPrice = studio * countNights;
        flatPrice = flat * countNights;
        if (countNights >= 7 && countNights <= 14) {
            console.log(`Apartment: ${flatPrice.toFixed(2)} lv.`);
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
        } else if (countNights > 14) {
            flatPrice = flatPrice * 0.90;
            console.log(`Apartment: ${flatPrice.toFixed(2)} lv.`);
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
        }
    }
}
data(["June",

"14"]);