function data(input){
    let annualPayment=Number(input[0]);

    let shoes=annualPayment-(annualPayment*0.4);
    let clothes=shoes-(shoes*0.2);
    let ball=clothes/4;
    let things=ball/5;
    let final=shoes+clothes+ball+things+annualPayment;


    console.log(final);
}
data(['550']);