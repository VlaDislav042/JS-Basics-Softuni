function data(input) {
    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    let operator = input[2];

    let result = 0;

    switch (operator) {
        case "+":
            result = number1 + number2;
            if (result % 2 == 0) {
                console.log(`${number1} + ${number2} = ${result} - even`);
            } else {
                console.log(`${number1} + ${number2} = ${result} - odd`);
            }
            break;
        case "-":
            result = number1 - number2;
            if (result % 2 == 0) {
                console.log(`${number1} - ${number2} = ${result} - even`);
            } else {
                console.log(`${number1} - ${number2} = ${result} - odd`);
            }
            break;
        case "*":
            result = number1 * number2;
            if (result % 2 == 0) {
                console.log(`${number1} * ${number2} = ${result} - even`);
            } else {
                console.log(`${number1} * ${number2} = ${result} - odd`);
            }
            break;
        case "/":
            if (number2 != 0) {
                result = number1 / number2;
                console.log(`${number1} / ${number2} = ${result.toFixed(2)} `);
            } else if (number2 == 0) {
                console.log(`Cannot divide ${number1} by zero`);
            }
            break;
        case "%":
            if (number2 != 0) {
                result = number1 % number2;
                console.log(`${number1} % ${number2} = ${result} `);
            } else if (number2 == 0) {
                console.log(`Cannot divide ${number1} by zero`);
            }
            break;
        default:
            break;
    }
}
data(["10", "3", "%"]);
