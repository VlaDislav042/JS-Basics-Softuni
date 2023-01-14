function data(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);

    let cakePieces = length * width;

    let index = 2;
    let currentStep = input[index];
    while (cakePieces != 0) {

        currentStep = input[index];
        if (currentStep == "STOP") {
            console.log(`${cakePieces} pieces are left.`);
            break;
        }
        let currentStep1 = Number(currentStep);
        cakePieces = cakePieces - currentStep1;

        
        if (cakePieces < 0) {
            console.log(`No more cake left! You need ${Math.abs(cakePieces)} pieces more.`);
            break;
        }
        index++;
        currentStep = input[index];
    }

}
data(["10",

"2",

"2",

"4",

"6",

"STOP"]);