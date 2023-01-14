function data(input) {
    let actor = input[0];
    let points = Number(input[1]);
    let numberJury = Number(input[2]);

    let indexJuryName = 3;
    let indexJuryPoints = 4;

    for (let i = numberJury; i <= input.length; i--) {
        points += (input[indexJuryName].length * (Number(input[indexJuryPoints]))) / 2;

        if (points >= 1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;
        } else if (points < 1250.5 && i === 1) {
            console.log(`Sorry, ${actor} you need ${(1250.5 - points).toFixed(1)} more!`);
            break;
        }
        indexJuryName+=2;
        indexJuryPoints+=2;
    }

}
data(["Zahari Baharov",

    "205",

    "4",

    "Johnny Depp",

    "45",

    "Will Smith",

    "29",

    "Jet Lee",

    "10",

    "Matthew Mcconaughey",

    "39"]);