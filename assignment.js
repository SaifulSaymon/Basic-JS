
//Problem - 01
function kilometerToMeter(value) {

    var meter = value*1000;   // 1 kilometer = 1000 meter
    return meter;  //Return km to meter.
}




//Problem - 02
function budgetCalculator(watch, phone, laptop) {

    var watchPrice = watch * 50;      // per watch price is 50
    var phonePrice = phone * 100;    // per phone price is 100
    var laptopPrice = laptop * 500; // per laptop price is 500

    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;  //Return total price of watch,phone & laptop.
}




//Problem - 03
function hotelCost(days) {
    var cost,price,remaindays;

    if (days <= 10) {
     cost = days * 100;  //First 10 days cost is 100 per day.
    }

    else if (days <= 20) {
        price = 10 * 100;
        remaindays = days - 10;
        cost = price + (remaindays * 80);  // From (11-20) days cost is 80 per day.
    }
    else {
        price = (10*100) + (10*80);
        remaindays = days - 20;
        cost = price + (remaindays * 50);  // From (20<days) cost is 50 per day.
    }
    return cost;  //Return total cost.
}



//Problem - 04
function megaFriend(array) {
    
    var megaWord = "";

    for (var i = 0; i < array.length; i++) {
        if (megaWord < array[i]) {
            megaWord = array[i];
        }
    }
    return megaWord; //Return largest friend's name.
}




  
