import {Product} from './Product'
import { SaleDiscount } from './SaleDiscount';
import { SaleDiscountAndCount } from './SaleDiscountAndCount';

const stationery: {
  obj: string;
  price: number;
}[]= [
  {obj: 'Ручка', price: 56,},
  {obj: 'Маркер', price: 80,},
  {obj: 'Карандаш', price: 25,},
  {obj: 'Ластик', price: 15,},
]

const cars: {
  obj: string;
  price: number;
  }[]= [
  {obj: 'BMW', price: 1000000,},
  {obj: 'OPEL', price: 800000,},
  {obj: 'LADA', price: 550000,},
  {obj: 'AUDI', price: 1200000,},
]

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(stationery);
console.log(stationery.sort());

const stationerySort = stationery.sort((a, b) => a.obj > b.obj ? 1 : -1)
const carsSort = cars.sort((a, b) => a.obj > b.obj ? 1 : -1)

const stationeryProduct = stationerySort.map(item => new Product (item.obj, item.price))
console.log('stationeryProduct: ', stationeryProduct);

const carsProduct = carsSort.map(item => new Product (item.obj, item.price))
console.log('carsProduct: ', carsProduct);

const SaleDiscountStationery =stationeryProduct.map(item => new SaleDiscount (item, getRandomInt(1, 10))) 
SaleDiscountStationery.map(item => item.getPrice())

const SaleDiscountAndCountCarsProduct = carsProduct.map(item =>  new SaleDiscountAndCount (item, getRandomInt(1, 10), getRandomInt(1, 10)))
SaleDiscountAndCountCarsProduct.map(item => item.getPrice())