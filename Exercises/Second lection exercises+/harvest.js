function data(input) {
    let areaField = Number(input[0]);
    let grape = Number(input[1]);
    let wineNeeded = Number(input[2]);
    let workers = Number(input[3]);

    let allGrape = areaField * grape;
    let wine = 0.4 * allGrape / 2.5;
    let diff = Math.abs(wine - wineNeeded);
    let wineForWorkers = diff / workers;

    if (wine < wineNeeded) {
        console.log(`It will be a tough winter! More ${diff.toFixed(0)} liters wine needed.`);

    } else if (wine >= wineNeeded) {
        console.log(`Good harvest this year! Total wine: ${wine} liters.`);
        console.log(`${diff.toFixed(0)} liters left -> ${wineForWorkers} liters per person.`);
    }

}
data(['1020', '1.5', '425', '4']);