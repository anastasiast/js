'use strict';

class Product {
    constructor(id, title, sku, qty, rank, reviews) {
        this.id = id
        this.title = title
        this.sku = sku
        this.qty = qty
        this.rank = rank
        this.reviews = reviews
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
}


class MasterProduct extends Product {
    #idProduct;
    #skuProduct = 0;
    #rankProduct;

    constructor(id, title, sku, qty, rank, reviews, attributes, price, discount) {
        super(id, title, sku, qty, rank, reviews, attributes);

        delete this.id;
        delete this.sku;
        delete this.rank;

        this.#idProduct = id;
        this.#skuProduct = sku;
        this.#rankProduct = rank;
        this.attributes = attributes;
        this.price = price;

        this.specialPrice = this.price * (100 - Number(discount))/100;
        this.setEconomy();
        this.setDeliveryDate();
        this.setPickupDate();
    }

    set specialPrice(value) {
        this._specialPrice = value;
    }

    get specialPrice() {
        return this._specialPrice
    }

    setDeliveryDate() {
        this.deliveryDate = new Date();
        this.deliveryDate.setDate(new Date().getDate() + 10);
    }

    setPickupDate() {
        this.pickupDate = new Date();

        if (this.pickupDate.getHours() > 18) {
            this.pickupDate.setDate(new Date().getDate() + 1)
        }
    }

    setEconomy() {
        this.economy = this.price - this.specialPrice;
    }

    addToCompare() {
        alert(`Item ${this.id} added to compare`);
    }

    addToWishlist() {
        alert(`Item ${this.id} added to wishlist`);
    }

    removeFromCompare() {
        alert(`Item ${this.id} removed from compare`);
    }

    removeFromWishlist() {
        alert(`Item ${this.id} removed from wishlist`);
    }

    updateAttributes() {
        alert(`Updated attributes`);
    }

    increaseQty(qty) {
        if (qty > this.qty) {
            alert(`Quantity must be less ${this.qty}`);
            return false;
        }

        super.increaseQty(qty);
    }

    decreaseQty(qty) {
        if (qty < 1) {
            alert(`Quantity must be more 1`);
            return false;
        }

        super.increaseQty(qty);
    }

    set skuProduct(value) {
        this.#skuProduct = value;
    }

    get skuProduct() {
        return this.#skuProduct;
    }

    set rankProduct(value) {
        this.#rankProduct = value;
    }

    get rankProduct() {
        return this.#rankProduct;
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


