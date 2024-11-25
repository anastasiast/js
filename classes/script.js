'use strict';

class Product {
    #id;
    #sku;
    #rank;

    constructor(id, title, sku, qty, rank, reviews) {
        this.#id = id;
        this.#sku = sku;
        this.#rank = rank;

        this.title = title;
        this.qty = qty;
        this.reviews = reviews;
    }

    addToCart() {
        fetch('Some url', {
            body: JSON.stringify({
                'qty': 1
            })
        })
    }

    increaseQty(qty) {
        return qty + 1
    }

    decreaseQty(qty) {
        return qty + 1
    }

    get sku() {
        return this.#sku;
    }

    get rank() {
        return this.#rank;
    }
}


class MasterProduct extends Product {
    #id;

    constructor(id, title, sku, qty, rank, reviews, attributes, price) {
        super(id, title, sku, qty, rank, reviews, attributes);
        this.attributes = attributes;
        this.price = price;
        this.#id = id;
    }

    set discount(discount) {
        this._specialPrice = this.price * (100 - Number(discount))/100;
    }

    get specialPrice() {
        return this._specialPrice || this.price
    }

    get deliveryDate() {
        const deliveryDate = new Date(new Date().setDate(new Date().getDate() + 10));

        return [deliveryDate.getDate(), deliveryDate.getMonth(), deliveryDate.getFullYear()].join('.');
    }

    get pickupDate() {
        const pickupDate = (new Date().getHours() > 18 ?
            new Date(new Date().setDate(new Date().getDate() + 1)) : new Date());

        return [pickupDate.getDate(), pickupDate.getMonth(), pickupDate.getFullYear()].join('.');
    }

    get economy() {
        return this.price - this.specialPrice;
    }

    addToCompare() {
        alert(`Item ${this.#id} added to compare`);
    }

    addToWishlist() {
        alert(`Item ${this.#id} added to wishlist`);
    }

    removeFromCompare() {
        alert(`Item ${this.#id} removed from compare`);
    }

    removeFromWishlist() {
        alert(`Item ${this.#id} removed from wishlist`);
    }

    updateAttributes(attributes) {
        this.attributes = attributes;
    }

    increaseQty(qty) {
        if (qty > this.qty) {
            return alert(`Quantity must be less ${this.qty}`);
        }

        super.increaseQty(qty);
    }

    decreaseQty(qty) {
        if (qty < 1) {
            return alert(`Quantity must be more 1`);
        }

        super.increaseQty(qty);
    }
}

const productItem = new MasterProduct(
    12,
    'First item',
    12321,
    23,
    1,
    2,
    [{color: 'white'},{size: 'L'},{brand: 'Lacoste'}],
    1234,
    10
);


