function data(input) {
    let vacation=Number(input[0]);
    let puzzles=Number(input[1]);
    let dolls=Number(input[2]);
    let bears=Number(input[3]);
    let minions=Number(input[4]);
    let trucks=Number(input[5]);

    let CountAllToys=puzzles+dolls+bears+minions+trucks;
    let sumAllToys=puzzles*2.60+dolls*3.00+bears*4.10+minions*8.20+trucks*2.00;

    if(CountAllToys>=50){
        let discount=sumAllToys*0.25;
        sumAllToys=sumAllToys-discount;
    }
    let rent=sumAllToys*0.10;
    sumAllToys=sumAllToys-rent;
    let diff=Math.abs(sumAllToys-vacation);
    if(sumAllToys>=vacation){
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else{
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }

   
}
data(["40.8",
"20",
"25",
"30",
"50",
"10"])
;
