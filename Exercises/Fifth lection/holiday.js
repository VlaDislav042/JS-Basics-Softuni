function data(input) {
    let needMoney = Number(input[0]);
    let currentMoney = Number(input[1]);

    let spendDays = 0;
    let days = 0;
    let index = 2;
    let currentInput = input[index];

    while (currentMoney <= needMoney) {
        days++;
        if (currentInput === "spend") {
            spendDays++;
            index++;

            if (spendDays == 5) {
                console.log("You can't save the money.");
                console.log(days);
                break;
            }
            let moneyToSpend = Number(input[index]);
            currentMoney = currentMoney - moneyToSpend;
            if (currentMoney < 0) {
                currentMoney = 0;
            }

        } else if (currentInput === "save") {
            spendDays = 0;
            index++;
            let moneyToSave = Number(input[index]);
            currentMoney = currentMoney + moneyToSave;
        }
        index++;
        currentInput = input[index];
        if (currentMoney >= needMoney) {
            console.log(`You saved the money for ${days} days.`);
            break;
        }
    }

}
data(["250",

    "150",

    "spend",

    "50",

    "spend",

    "50",

    "save",

    "100",

    "save",

    "100"]);