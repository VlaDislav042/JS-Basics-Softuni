function data(input) {
    let minWalk = Number(input[0]);
    let countWalk = Number(input[1]);
    let catCalories = Number(input[2]);

    let allWalk = minWalk * countWalk;
    let burnCalories = allWalk * 5;

    let halfCatCalories = catCalories / 2;

    if (burnCalories >= halfCatCalories) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnCalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnCalories}.`);
    }
}
data(["15",
    "2",
    "500"]);