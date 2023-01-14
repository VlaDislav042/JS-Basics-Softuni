    function data(input){
        let side=Number(input[0]);
        let height=Number(input[1]);

        let area=side*height/2;
        let finalAnswer=area.toFixed(2);

        console.log(finalAnswer);
    }
    data(['20','30']);