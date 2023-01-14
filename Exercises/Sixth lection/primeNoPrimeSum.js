function data(input) {
    let number = Number(input[0]);

    let sumPrime = 0;
    let sumNoPrime = 0;

    let index = 0;
    let currentInput = input[index];
    while (input[index] != "stop") {
        currentInput = Number(input[index]);

        if (currentInput < 0) {
            console.log(`Number is negative.`);
            
        } else if (currentInput > 3 && (currentInput % 2 === 0 || currentInput % 3 === 0)) {
            sumNoPrime += currentInput;
        } else {
            sumPrime += currentInput;
        }

        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNoPrime}`);
}
data(["30",
"83",
"33",
"-1",
"20",
"stop"])
;
