function data(input) {
    let students=Number(input[0]);

    let studentsGroup4=0;
    let studentsGroup3=0;
    let studentsGroup2=0;
    let studentsGroup1=0;
    
    let currentGrade1=0;
    for (let index = 1; index < input.length; index++) {
        let currentGrade=Number(input[index]);
        currentGrade1+=currentGrade;
        if (currentGrade<3) {
            studentsGroup4++;
        }else if (currentGrade>=3 && currentGrade<=3.99) {
            studentsGroup3++;
        }else if (currentGrade>=4 && currentGrade<=4.99) {
            studentsGroup2++;
        }else if (currentGrade>=5.00) {
            studentsGroup1++;
        }
        
    }
    let group1=(studentsGroup1/students)*100;
    let group2=(studentsGroup2/students)*100;
    let group3=(studentsGroup3/students)*100;
    let group4=(studentsGroup4/students)*100;
    let aveGrade=currentGrade1/students;

    console.log(`Top students: ${group1.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${group2.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${group3.toFixed(2)}%`);
    console.log(`Fail: ${group4.toFixed(2)}%`);
    console.log(`Average: ${aveGrade.toFixed(2)}`);
}
data(["10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44","5"]);
