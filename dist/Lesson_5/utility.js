"use strict";
{ /*Утилитпрные типы: */
    const listGoods = {
        1: {
            id: 8465887468,
            price: 5000,
            title: 'book'
        },
        33: {
            id: 47448,
            price: 1000,
            title: 'pen',
            count: 15,
        }
    };
}
// Еще один вариант исполнения:
{
    const title = ['book', 'pen', 'pencil'];
    const listGoods = {
        "book": {
            id: 8465887468,
            price: 5000,
            title: 'book'
        },
        'pen': {
            id: 47448,
            price: 1000,
            title: 'pen',
            count: 15,
        },
        'pencil': {
            id: 4984,
            price: 900,
            title: 'pencil',
            count: 25,
        }
    };
    // type pickGoods = {
    //   title: string;
    //   readonly price: number;
    // }
    const getGoods = ({ title, price, count }) => {
        return {
            id: Math.floor(Math.random() * 10e8),
            title,
            price,
            count,
        };
    };
    const doogsRes = getGoods({
        title: 'battary',
        price: 200,
        count: 100,
    });
    console.log(doogsRes);
    {
        const getGoods = (title, price, count) => {
            return {
                id: Math.floor(Math.random() * 10e8),
                title,
                price,
                count,
            };
        };
        // получаем:
        // type p = number
    }
}
{
    const getGoods = () => fetch('https://api.com').then((response) => response.json());
    // получаем:
    // type R = Goods[]
}
