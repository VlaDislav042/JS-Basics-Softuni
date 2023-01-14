function data(input) {
    let money = Number(input[0]);
    let priceCake = money * 0.2;
    let priceDrinks = priceCake - (priceCake * 0.45);
    let animator = money / 3;

    let allMoney = money + priceCake + priceDrinks + animator;
    console.log(allMoney);

}
data(['2250']);