function data(input) {
    let goal = 10000;
    let steps = 0;
    let index = 0;
    let currentInput = input[index];

    while (steps < goal) {
         currentInput = input[index];
         if (currentInput === "Going home") {

            index++;
            let finalSteps = Number(input[index]);
            steps = steps + finalSteps;

            if (steps >= goal) {
                let diff = steps - goal;
                console.log("Goal reached! Good job!");
                console.log(`${diff} steps over the goal!`);
                break;
            }else if (steps<goal) {
                let diff = goal - steps;
                console.log(`${diff} more steps to reach goal.`);
                break;
            }
        }

        let currentSteps = Number(currentInput);
        steps = steps + currentSteps;

        if (steps >= goal) {
            let diff = steps - goal;
            console.log("Goal reached! Good job!");
            console.log(`${diff} steps over the goal!`);
            break;
        }
        
        index++;
        currentInput = input[index];
    }
}
data(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);