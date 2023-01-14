function data(input){
    let b1=Number(input[0]);
    let b2=Number(input[1]);
    let h=Number(input[2]);

    let solution=(b1+b2)*h/2;
    let final= solution.toFixed(2);
    console.log(final);

}
data(['8','13','7'])