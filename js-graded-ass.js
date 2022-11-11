// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

function getPrices(taxBoolean) {
    for(let i = 0; i < dishData.length; i++) {
        // console.log(dishData[i]);
        var finalPrice;
        if(taxBoolean == true){
            finalPrice = dishData[i].price * tax
            // console.log(dishData[i].price);
            // console.log(finalPrice);
        } else if(taxBoolean == false){
            // console.log("Hey!")
            finalPrice = dishData[i].price
        } else {
            // console.log("You need to pass a boolean to the getPrices call!");
            return;
        }
        console.log("Dish: " + dishData[i].name + ' ' + "Price: $" + dishData[i].price)
    }
}

// getPrices(true)

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean)
    if(typeof guests === "number" && guests > 0 && guests < 30) {
        var discount = 0;
        if(guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }
        console.log('Discount is: $' + discount);
    } else {
            'The second argument must be a number between 0 and 30'
    }
}
getDiscount(true, 2)








// Implement getPrices()
// function getPrices(taxBoolean) {
//     dishData.forEach(dish => {
//         for (let key in dish) {
//           var finalPrice;
//           if(taxBoolean) {
//             console.log(`${key}: ${dish[key]}`)
//             // console.log(dishData.map(a => a.price))
//             // console.log(`${dish[key]}`)
//           }
//         }
//       })
// }

// function getPrices2(taxBoolean) {
//           var finalPrice;
//           if(taxBoolean) {
//             console.log(dishData.map(a => a.price))
//           }
// }