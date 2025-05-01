// Задание 1

var arrProducts = [
    { name: 'product30', price: 30, count: 5 },
    { name: 'product120', price: 120, count: 3 },
    { name: 'product50', price: 50, count: 6 },
    { name: 'product140', price: 140, count: 2 }
];

for (var i = 0; i < arrProducts.length; i++) {
    if (arrProducts[i].price > 100) {
        console.log(arrProducts[i]);
    };
};

var arrProductsAbove100 = [];

for (var i = 0; i < arrProducts.length; i++) {
    if (arrProducts[i].price > 100) {
        arrProductsAbove100.push(arrProducts[i]);
    }
}

console.log(arrProductsAbove100);


// Задание 2

var maxPriceProduct = 1;

var getMaxPrice = function () {
    for (var i = 0; i < arrProducts.length; i++) {
        if (arrProducts[i].price > maxPriceProduct) {
            maxPriceProduct = arrProducts[i].price;
        }
    }
    return {
        ProductWithMaxPrice: function () {
            for (var i = 0; i < arrProducts.length; i++) {
                if (arrProducts[i].price == maxPriceProduct) {
                    return (arrProducts[i]);
                }
            }
        }
    }
}

const myMaxPrice = getMaxPrice();

console.log(myMaxPrice.ProductWithMaxPrice);


// Задание 3

var shop = {
    address: 'Baker Street,12',
    telephone: 432245,
    email: 'Gorge@gmail.com',
    suppilers: [
        { name: 'Greeler', suppilerTelephone: 302456 },
        { name: 'Cheker', suppilerTelephone: 302456 },
        { name: 'Sam', suppilerTelephone: 302456 },
    ],
}

console.log(shop.suppilers);