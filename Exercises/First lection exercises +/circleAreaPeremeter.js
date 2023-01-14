function data(input) {
    let radius=Number(input[0]);

    let pi=Math.PI;
    let area=pi*Math.pow(radius,2);

    let perimeter=2*pi*radius;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}
data(['3'])