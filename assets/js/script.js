// Задание 1

var arrProducts = [
    { name: 'product30', price: 30, count: 5 },
    { name: 'product140', price: 140, count: 3 },
    { name: 'product120', price: 120, count: 6 },
    { name: 'product50', price: 50, count: 2 }
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

var getProductWithMaxPrice = function () {
    if (arrProducts.length === 0) return null;

    var productWithMaxPrice = arrProducts[0];

    for (var i = 1; i < arrProducts.length; i++) {
        if (arrProducts[i].price > productWithMaxPrice.price) {
            productWithMaxPrice = arrProducts[i];
        }
    }

    return productWithMaxPrice;
};

const myProductWithMaxPrice = getProductWithMaxPrice();
console.log(myProductWithMaxPrice);

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


// Задание 1 jQuery

document.addEventListener("DOMContentLoaded", function() {
    const battlefieldGrid3x3 = $(".gridItem");
    let health = 200; // Начальное количество жизней
    const healthLoss = 50; // Потеря здоровья при попадании из пистолета
    const healthGain = 50; // Восстановление здоровья при клике на безопасную клетку
    const maxHealth = 350; // Максимальное количество жизней
    
    const $healthDisplay = $('<div class="health-display">Жизни: ' + health + '</div>');
    $('body').prepend($healthDisplay);
    
    // Создаем массив с индексами безопасных клеток (по 1 в каждой тройке)
    const safeIndexes = [];
    for (let i = 0; i < battlefieldGrid3x3.length; i += 3) {
        const randomSafeIndex = Math.floor(Math.random() * 3);
        safeIndexes.push(i + randomSafeIndex);
    }

    battlefieldGrid3x3.on("click", function() {
        const gridItem = $(this);
        const currentIndex = battlefieldGrid3x3.index(this);

        if (gridItem.hasClass("highlighted") || gridItem.hasClass("battle")) {
            return;
        }

        if (!safeIndexes.includes(currentIndex)) {
            // В вас попали
            gridItem.addClass("battle");
            health = Math.max(0, health - healthLoss);
            $healthDisplay.text('Жизни: ' + health);
            
            if (health <= 0) {
                // Показать все выстрелы
                battlefieldGrid3x3.each(function(index) {
                    if (!safeIndexes.includes(index)) {
                        $(this).addClass("battle");
                    }
                });
                alert("Игра окончена! Вы потеряли все жизни!");
                battlefieldGrid3x3.off("click");
            } else {
                alert("В вас выстрелили! Потеряно " + healthLoss + " жизней. Осталось: " + health);
            }
        } else {
            // Безопасная клетка
            gridItem.addClass("highlighted");
            health = Math.min(maxHealth, health + healthGain);
            $healthDisplay.text('Жизни: ' + health);
            
            // Проверяем условие победы (все безопасные клетки открыты И здоровье > 0)
            const openedSafeCells = battlefieldGrid3x3.filter(".highlighted").length;
            if (openedSafeCells === safeIndexes.length) {
                if (health > 0) {
                    alert("Поздравляем! Вы выиграли с " + health + " жизнями!");
                } else {
                    alert("Вы нашли все укрытия, но потеряли все жизни! Игра окончена.");
                }
                battlefieldGrid3x3.off("click");
            }
        }
    });
});