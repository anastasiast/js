'use strict';


// Нужно сделать новый объект MasterProduct, который в качестве прототипа
// будет использовать объект Product, и расширять его свойствами и методами

let Product = {
    id: 13132,
    title: 'Соковыжималка',
    sku: 'NNUK12347-KHF',
    qty: 132,
    rank: 4.5,
    reviews: 115,

    addToCart: async function() {
        fetch('Some url', {
            body: JSON.stringify({
                'qty': 1
            })
        })
    },

    increaseQty: function(qty) {
        return qty + 1
    },

    decreaseQty: function(qty) {
        return qty + 1
    }
};

let MasterProduct = Object.create(Product, {
    attributes: {
        value: [1, 2, 3, 4, 5]
    },
    pickupDate: {
        value: ['12-08-2024', '14-08-2024', '16-08-2024']
    },
    deliveryDate: {
        value: ['11-08-2024', '13-08-2024', '15-08-2024']
    },
    price: {
        value: 1234
    },
    specialPrice: {
        value: 1200,
        writable: true
    },
    economy: {
        get() {
            return this.price - this.specialPrice
        }
    },
    addToCompare: {
        value() {
            alert(`Item id#${this.id} was added to compare`)
        }
    },
    addToWishlist: {
        value() {
            alert(`Item id#${this.id} was added to wishlist`)
        }
    },
    removeFromCompare: {
        value() {
            alert(`Item id#${this.id} was removed from compare`)
        }
    },
    removeFromWishlist: {
        value() {
            alert(`Item id#${this.id} was removed from wishlist`)
        }
    }
});

// ======================

// Расширить стандартный конструктор объектов Object новым методом.
// Данный метод должен рекурсивно копировать все содержимое объекта в новый объект.
// Обратится к этому методу можно через Object.copy([Ссылка на объект]).


Object.prototype.copy = function(obj) {
    let copiedObj = {};

    for (let key in obj) {
        copiedObj[key] = typeof obj[key] == 'object' ? this(obj[key]) : obj[key];
    }
    return copiedObj;
}

let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
        sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

let copyCompany = Object.copy(company);

console.log('copyCompany:', copyCompany);
