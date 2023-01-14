function data(input) {
    let numberGroups = Number(input[0]);

    let mysala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    let sumPeople = 0;

    for (let i = 1; i <= numberGroups; i++) {
        let currentGroup = Number(input[i]);
        sumPeople += currentGroup;

        if (currentGroup <= 5) {
            mysala += currentGroup;
        } else if (currentGroup <= 12) {
            monblan += currentGroup;
        } else if(currentGroup <= 25){
            kilimandjaro +=currentGroup;
        } else if(currentGroup <= 40){
            k2 +=currentGroup;
        } else if(currentGroup >= 41){
            everest +=currentGroup;
        }

    } 
    let procentMysala=0;
    let procentMoblan=0;
    let procentKili=0;
    let procentK2=0;
    let procentEverest=0;

    console.log(`${procentMysala=((mysala/sumPeople)*100).toFixed(2)}%`);
    console.log(`${procentMoblan=((monblan/sumPeople)*100).toFixed(2)}%`); 
    console.log(`${procentKili=((kilimandjaro/sumPeople)*100).toFixed(2)}%`); 
    console.log(`${procentK2=((k2/sumPeople)*100).toFixed(2)}%`); 
    console.log(`${procentEverest=((everest/sumPeople)*100).toFixed(2)}%`); 
}
data(["5","25","41","31","250","6"]);