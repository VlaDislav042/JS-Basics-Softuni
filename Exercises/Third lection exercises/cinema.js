function data(input) {
    let film = input[0];
    let rows = Number(input[1]);
    let colons = Number(input[2]);
    let money = 0;

    if (film == "Premiere") {
        money = rows * colons * 12.00;
        console.log(`${money.toFixed(2)} leva`);
    } else if (film == "Normal") {
        money = rows * colons * 7.50;
        console.log(`${money.toFixed(2)} leva`);
    } else if (film == "Discount") {
        money = rows * colons * 5.00;
        console.log`${money.toFixed(2)} leva`;
    }
}
data(["Normal", "21", "13"]);