function data(input){
    let celsius=Number(input[0]);
    let fahrenheit=celsius*9/5+32;

    let final=fahrenheit.toFixed(2);

    console.log(final);
}
data(['25']);