// Задание 1

var arrProducts = [
    { name: 'product30', price: 30, count: 5 },
    { name: 'product120', price: 120, count: 3 },
    { name: 'product50', price: 50, count: 6 },
    { name: 'product140', price: 140, count: 2 }
];

var arrProductsAbove100 = [];

for (var i = 0; i < arrProducts.length; i++)
    if (arrProducts[i].price > 100) {
        arrProductsAbove100.push({ arrProducts[i].name });
        console.log(arrProductsAbove100);
    };


// Задание 2

