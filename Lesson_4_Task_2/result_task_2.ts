import {Product} from './Product'
import { SaleDiscount } from './SaleDiscount';
import { SaleDiscountAndCount } from './SaleDiscountAndCount';

const stationery: {
  obj: string;
  price: number;
}[]= [
  {obj: 'Ручка', price: 56,},
  {obj: 'Маркер', price: 80,},
  {obj: 'Карандаш', price: 200,},
  {obj: 'Ластик', price: 15,},
]

const cars: {
  obj: string;
  price: number;
  }[]= [
  {obj: 'BMW', price: 1000,},
  {obj: 'OPEL', price: 800,},
  {obj: 'LADA', price: 550,},
  {obj: 'AUDI', price: 1200,},
]

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const stationeryProduct = stationery.map(item => new Product (item.obj, item.price))
const SaleDiscountStationery = stationeryProduct.map(item => new SaleDiscount (item, getRandomInt(10, 15)))
const SaleDiscountStationerySort = SaleDiscountStationery.sort((a, b) => b.compare(a))
console.log('SaleDiscountStationerySort: ', SaleDiscountStationerySort);

const infoDiscountStationery = SaleDiscountStationerySort.map(item => item.getInfoSaleDiscount())
console.log('infoDiscountStationery: ', infoDiscountStationery);


const carsProduct = cars.map(item => new Product (item.obj, item.price))
const SaleDiscountAndCountCarsProduct = carsProduct.map(item =>  new SaleDiscountAndCount (item, getRandomInt(10, 15), getRandomInt(10, 15)))
const SaleDiscountAndCountCarsProductSort = SaleDiscountAndCountCarsProduct.sort((a, b) => b.compare(a))
console.log('SaleDiscountAndCountCarsProductSort: ', SaleDiscountAndCountCarsProductSort);

const infoDiscountCars = SaleDiscountAndCountCarsProductSort.map(item => item.getInfoSaleDiscountAndCount())
console.log('infoDiscountCars: ', infoDiscountCars);

