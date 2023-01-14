function data(input) {
    let weather=input[0];
    if (weather<=4.9) {
        console.log('unknown');
    } else if(weather=>5 && weather<11.9){
        console.log('Cold');
    } else if(weather=>12.0 && weather<14.9){
        console.log('Cool');
    } else if(weather=>15.0 && weather<20.0){
        console.log('Mild');
    }  else if(weather=>20.1 && weather<25.9){
        console.log('Warm');
    }  else if(weather=>26.0 && weather<=35.0){
        console.log('Hot');
    } 
}
data(['16.5'])