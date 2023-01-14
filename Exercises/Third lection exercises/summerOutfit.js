function data(input) {
    let temp = Number(input[0]);
    let time = input[1];

    let outfit;
    let shoes;

    if (10 <= temp && temp <= 18) {
        switch (time) {
            case "Morning":
                outfit = "Sweatshirt";
                shoes = "Sneakers";
                console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`);
                break;
            case "Afternoon":
                outfit = "Shirt";
                shoes = "Moccasins";
                console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`);
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`);
                break;
            default:
                console.log("error");
                break;
        }
    } else if (18 <= temp && temp <= 24) {
        switch (time) {
            case "Morning":
                outfit = "Shirt";
                shoes = "Moccasins";
                console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`);
                break;
            case "Afternoon":
                outfit = "T-Shirt";
                shoes = "Sandals";
                console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`);
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`);
                break;
            default:
                console.log("error");
                break;
        }
    } else if (temp >= 25) {
        switch (time) {
            case "Morning":
                outfit = "T-Shirt";
                shoes = "Sandals";
                console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`);
                break;
            case "Afternoon":
                outfit = "Swim Suit";
                shoes = "Barefoot";
                console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`);
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`);
                break;
            default:
                console.log("error");
                break;
        }
    } else {
        console.log("error");
    }
}
data(["28", "Evening"]);