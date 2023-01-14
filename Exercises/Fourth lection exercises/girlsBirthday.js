function data(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let money = 0;
    let toysCount = 0;
    let stolenMoney = 0;
    let addMoney = 10;

    for (let i = 1; i <= age; i++) {

        if (i % 2 == 0) {
            money += addMoney;
            addMoney += 10;
            stolenMoney++;

        } else {
            toysCount++;
        }
    }
    let moneyFromToys = toysCount * toyPrice;
    let allSavedMoney = moneyFromToys + money - stolenMoney;

    if (allSavedMoney >= washingMachinePrice) {
        console.log(`Yes! ${Math.abs(allSavedMoney - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${Math.abs(allSavedMoney - washingMachinePrice).toFixed(2)}`);
    }

}
data(["21",

    "1570.98",

    "3"]);