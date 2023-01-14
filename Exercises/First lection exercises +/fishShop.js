function data(input) {
    let skymriqKg=Number(input[0]);
    let cacaKg=Number(input[1]);
    let palamydKg=Number(input[2]);
    let safridKg=Number(input[3]);
    let midiKg=Number(input[4]);

    let palamydPrice=skymriqKg+skymriqKg*0.60;
    let palamydSum=palamydKg*palamydPrice;

    let safridPrice=cacaKg+cacaKg*0.80;
  
    let safridSum=safridKg*safridPrice;

    let middiSum=midiKg*7.50;

    let sumAll=palamydSum+safridSum+middiSum;
   
    console.log(sumAll.toFixed(2));

}
data(['5.55','3.57','4.3','3.6','7'])