function data(input) {
    let numberPeople=Number(input[0]);
    let nights=Number(input[1]);
    let cardsTransport=Number(input[2]);
    let ticketM=Number(input[3]);

    let priceNights=20*nights;
    let priceCardsTransport=cardsTransport*1.60;
    let priceTicketM=ticketM*6;

    let price=(priceNights+priceCardsTransport+priceTicketM)*numberPeople;
    let discount=price*0.25;

    let finalPrice=price+discount;

    console.log(finalPrice.toFixed(2));

}
data(['20','14','30','6']);