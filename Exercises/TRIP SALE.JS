function data(input) {
    let tripSea = Number(input[0]);
    let tripMountain = Number(input[1]);

    let countTripSea = tripSea;
    let countTripMountain = tripMountain;

    let profit = 0;

    index = 2;
    let current = input[index];

    while (current != 'Stop' || current < input.length) {
        current = input[index];
        if (current === "sea") {
            if (countTripSea != 0) {
                profit += 680;
                countTripSea--;
            }

        } else if (current === "mountain") {
            if (countTripMountain != 0) {
                profit += 499;
                countTripMountain--;
            }

        }


        if (countTripSea === 0 && countTripMountain === 0) {
            console.log(`Good job! Everything is sold.`);
            break;
        }
        index++;
        current = input[index];
    }
    console.log(`Profit: ${profit} leva. `);
}
data(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"])
;
