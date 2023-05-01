"use strict";
class TV {
    title;
    id = +(Math.random().toString(32).substring(2, 6) +
        Date.now().toString().substring(9));
    count = 0;
    price;
    constructor(title, price, count = 0) {
        this.title = title;
        this.count = count;
        this.price = price;
    }
    logger(str) {
        console.log(str + this.title);
    }
}
class WM {
    title;
    id = +(Math.random().toString(32).substring(2, 6) +
        Date.now().toString().substring(9));
    count = 0;
    price;
    weight;
    constructor(title, price, count = 0, weight) {
        this.title = title;
        this.count = count;
        this.price = price;
        this.weight = weight;
    }
    logger(str) {
        console.log(str + this.title);
    }
}
