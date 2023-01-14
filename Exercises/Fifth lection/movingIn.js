function data(input) {
    let freeSpaceWidth = Number(input[0]);
    let freeSpaceLength = Number(input[1]);
    let freeSpaceHeigth = Number(input[2]);

    let freeSpace = freeSpaceWidth * freeSpaceLength * freeSpaceHeigth;

    let fullySpace = 0;
    let index = 3;
    let currentStep = input[index];
    while (freeSpace > fullySpace) {

        currentStep = input[index];

        if (currentStep === "Done") {
            if (freeSpace >= fullySpace) {
                console.log(`${freeSpace - fullySpace} Cubic meters left.`);
                break;
            } else if (freeSpace < fullySpace) {
                console.log(`"No more free space! You need ${fullySpace - freeSpace} Cubic meters more.`);
                break;
            }
        }
        let currentStep1 = Number(currentStep);
        fullySpace = fullySpace + currentStep1;

        index++;
        currentStep = input[index];
    }
    if (fullySpace>freeSpace) {
        console.log(`No more free space! You need ${fullySpace - freeSpace} Cubic meters more.`);
    }
}
data(["10",

"1",

"2",

"4",

"6",

"Done"]);