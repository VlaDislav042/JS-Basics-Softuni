function data(input) {
    let numberTournament=Number(input[0]);
    let points=Number(input[1]);
    let avePoints=0;
    let winTournament=0;

    for(let i=2;i<=numberTournament+2;i++){
        let currentTournament=input[i];

        switch (currentTournament) {
            case "W":
                points+=2000;
                avePoints+=2000;
                break;
            case "F":
                points+=1200;
                avePoints+=1200;
                break;
            case "SF":
                points+=720;
                avePoints+=720;
                break;
        } if (currentTournament=="W") {
            winTournament++;
        }

    }
    
    winTournament=(winTournament/numberTournament)*100;
    avePoints=avePoints/numberTournament;
    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(avePoints)}`);
    console.log(`${winTournament.toFixed(2)}%`);

   
}
data(['7',
    '1200',
    'SF',
    'F',
    'W',
    'F',
    'W',
    'SF',
    'W']);