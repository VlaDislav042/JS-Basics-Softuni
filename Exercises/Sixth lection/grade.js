function data(input) {
    let n = Number(input[0]);

    let index = 1;
    let command = input[index];
    let sumGrades = 0;
    let counter = 0;


    while (command !== "Finish") {
        counter++;

        let name = command;
        let tempSumGrade = 0;
        for (let i = 0; i < n; i++) {
            index++;
            let grade = Number(input[index]);
            tempSumGrade += grade;
        }
        let aveGrade = tempSumGrade / n;
        sumGrades += aveGrade;
        console.log(`${name} - ${aveGrade.toFixed(2)}.`);

        index++;
        command = input[index];
    }
    let finalAveGrade = sumGrades / counter;
    console.log(`Student's final assessment is ${finalAveGrade.toFixed(2)}.`);
}
data(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"])
