function data(input){
    let lenght=Number(input[0]);
    let width=Number(input[1]);
    let height=Number(input[2]);
    let procent=Number(input[3]);
    let sand=procent/100;

    let volumeFishTank=lenght*width*height;
    let volumeInLiter=volumeFishTank*0.001;
    let neededWater=volumeInLiter*(1-sand);


    console.log(neededWater);
}
data(["85 ",
"75 ",
"47 ",
"17 "]
);