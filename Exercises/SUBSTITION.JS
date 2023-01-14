function data(input) {
    let K=Number(input[0]);
    let L=Number(input[1]);
    let M=Number(input[2]);
    let N=Number(input[3]);
    let count=0;

    
    for(let i=K;i<=8;i++){
        for(let j=L;j<=9;j++){
            let current=i+""+j;
            console.log(current);
        }
    }
    for(let i=M;i<=8;i++){
        for(let j=N;j<=9;j++){
            let current=i+""+j;
            console.log(current);
        }
    }
   
}
data(["7",
"6",
"8",
"5"]);