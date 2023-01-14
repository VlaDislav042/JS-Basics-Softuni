function data(input) {
    let bitcoin = Number(input[0]);
    let chineseYuan = Number(input[1]);
    let commision = Number(input[2]);

    let bitcoinToLv = bitcoin * 1168;
    let chineseYuanToDolar = chineseYuan * 0.15;
    let dolarToLv = chineseYuanToDolar * 1.76;

    let allMoneyToLv = bitcoinToLv + dolarToLv;
    let allMoneyToEuro = allMoneyToLv / 1.95;

    let commision2 = commision / 100;

    let commision3 = commision2 * allMoneyToEuro;

    let finalMoney = allMoneyToEuro - commision3;

    console.log(finalMoney.toFixed(2));
}
data(["20",
    "5678",
    "2.4"])
    ;