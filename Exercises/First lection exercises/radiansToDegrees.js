function data(input){
    let radians=Number(input[0]);
    let degrees=radians*180 / Math.PI;
    console.log(degrees);
}
data(["3.1416"]);