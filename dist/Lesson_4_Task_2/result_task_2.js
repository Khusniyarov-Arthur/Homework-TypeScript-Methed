"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
const SaleDiscount_1 = require("./SaleDiscount");
const SaleDiscountAndCount_1 = require("./SaleDiscountAndCount");
const stationery = [
    { obj: 'Ручка', price: 56, },
    { obj: 'Маркер', price: 80, },
    { obj: 'Карандаш', price: 25, },
    { obj: 'Ластик', price: 15, },
];
const cars = [
    { obj: 'BMW', price: 1000000, },
    { obj: 'OPEL', price: 800000, },
    { obj: 'LADA', price: 550000, },
    { obj: 'AUDI', price: 1200000, },
];
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};
console.log(stationery);
console.log(stationery.sort());
const stationerySort = stationery.sort((a, b) => a.obj > b.obj ? 1 : -1);
const carsSort = cars.sort((a, b) => a.obj > b.obj ? 1 : -1);
const stationeryProduct = stationerySort.map(item => new Product_1.Product(item.obj, item.price));
console.log('stationeryProduct: ', stationeryProduct);
const carsProduct = carsSort.map(item => new Product_1.Product(item.obj, item.price));
console.log('carsProduct: ', carsProduct);
const SaleDiscountStationery = stationeryProduct.map(item => new SaleDiscount_1.SaleDiscount(item, getRandomInt(1, 10)));
SaleDiscountStationery.map(item => item.getPrice());
const SaleDiscountAndCountCarsProduct = carsProduct.map(item => new SaleDiscountAndCount_1.SaleDiscountAndCount(item, getRandomInt(1, 10), getRandomInt(1, 10)));
SaleDiscountAndCountCarsProduct.map(item => item.getPrice());
