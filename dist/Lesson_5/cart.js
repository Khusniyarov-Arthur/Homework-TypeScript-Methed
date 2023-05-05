"use strict";
{
    const getCountGoods = (arr, title) => {
        const goods = arr.find(item => item.title === title);
        return goods?.count ?? 0;
    };
    const goods = [
        {
            title: 'Notebook',
            count: 10,
        },
        {
            title: 'Notepad',
            count: 15,
        },
        {
            title: 'Smartphone',
            count: 20,
        },
    ];
    const countP = getCountGoods(goods, 'Notepad');
    console.log('countP: ', countP);
}
{
    class Cart {
        goods = [];
        add(item) {
            this.goods.push(item);
        }
        get(title) {
            return this.goods.find(item => item.title === title) ?? null;
        }
        get totalPrice() {
            return this.goods.reduce((acc, item) => acc + item.price * item.count, 0);
        }
    }
    class TechCart extends Cart {
    }
    const techCart = new TechCart();
    techCart.add({
        title: 'Монитор Huawei',
        count: 1,
        price: 30000,
        type: 'Монитор',
        description: 'Huawei Wev 300BFull',
    });
    techCart.add({
        title: 'Ноутбук Huawei',
        count: 2,
        price: 70000,
        type: 'Ноутбук',
        description: 'Huawei MateBook 16',
    });
    techCart.add({
        title: 'Мышь Huawei',
        count: 9,
        price: 2000,
        type: 'Мышь',
        description: 'Huawei M590',
    });
    // console.log('totalPrice' ,techCart.totalPrice);
    // console.log('Ноутбук Huawei', techCart.get('Ноутбук Huawei'));
}
// ВТОРАЯ ЧАСТЬ УРОКА ОПЕРАТОРЫ ТИПОВ И СЛУЖЕБНЫЕ ТИПЫ:
{
    const getCountGoods = (arr, title) => {
        const goods = arr.find(item => item.title === title);
        return goods?.count ?? 0;
    };
    const goods = [
        {
            title: 'Notebook',
            count: 10,
        },
        {
            title: 'Notepad',
            count: 15,
        },
        {
            title: 'Smartphone',
            count: 20,
        },
    ];
    const countP = getCountGoods(goods, 'Notepad');
    console.log('countP: ', countP);
}
{
    // Можно написать и так:
    // const filter = ( arr: Goods[], key: KeysOfGoods, value :string | number) => {
    // const filter = ( arr: Goods[], key: KeysOfGoods, value :Goods[KeysOfGoods]) => {
    const filter = (arr, key, value) => {
        return arr.filter((item) => item[key] === value);
    };
    class Cart {
        goods = [];
        add(item) {
            this.goods.push(item);
        }
        get(title) {
            return this.goods.find(item => item.title === title) ?? null;
        }
        get totalPrice() {
            return this.goods.reduce((acc, item) => acc + item.price * item.count, 0);
        }
    }
    class TechCart extends Cart {
    }
    const techCart = new TechCart();
    techCart.add({
        title: 'Монитор Huawei',
        count: 1,
        price: 30000,
        type: 'Монитор',
        description: 'Huawei Wev 300BFull',
    });
    techCart.add({
        title: 'Ноутбук Huawei',
        count: 2,
        price: 70000,
        type: 'Ноутбук',
        description: 'Huawei MateBook 16',
    });
    techCart.add({
        title: 'Мышь Huawei',
        count: 9,
        price: 2000,
        type: 'Мышь',
        description: 'Huawei M590',
    });
    const res = filter(techCart.goods, 'price', 70000);
    console.log('res: ', res);
    const res2 = filter(techCart.goods, 'type', 'Ноутбук');
    console.log('res2: ', res2);
    const goods = {
        title: 'Ноутбук Huawei',
        count: 2,
        price: 70000,
        type: 'Ноутбук',
        description: 'Huawei MateBook 16',
    };
    const goods2 = {
        title: 'Мышь Huawei',
        count: 9,
        price: 2000,
        type: 'Мышь',
        description: 'Huawei M590',
    };
}
// Видео 2: 13 минута
{
    const filter = (arr, key, value) => {
        return arr.filter((item) => item[key] === value);
    };
    const categories = ['Монитор', 'Ноутбук', 'Мышь'];
    class Cart {
        goods = [];
        add(item) {
            this.goods.push(item);
        }
        get(title) {
            return this.goods.find(item => item.title === title) ?? null;
        }
        get totalPrice() {
            return this.goods.reduce((acc, item) => acc + item.price * item.count, 0);
        }
    }
    class TechCart extends Cart {
    }
    const techCart = new TechCart();
    techCart.add({
        title: 'Монитор Huawei',
        count: 1,
        price: 30000,
        type: 'Монитор',
        description: 'Huawei Wev 300BFull',
    });
    techCart.add({
        title: 'Ноутбук Huawei',
        count: 2,
        price: 70000,
        type: 'Ноутбук',
        description: 'Huawei MateBook 16',
    });
    techCart.add({
        title: 'Мышь Huawei',
        count: 9,
        price: 2000,
        type: 'Мышь',
        description: 'Huawei M590',
    });
    const res = filter(techCart.goods, 'price', 70000);
    console.log('res: ', res);
    const res2 = filter(techCart.goods, 'type', 'Ноутбук');
    console.log('res2: ', res2);
    const goods = {
        title: 'Ноутбук Huawei',
        count: 2,
        price: 70000,
        type: 'Ноутбук',
        description: 'Huawei MateBook 16',
    };
    const goods2 = {
        title: 'Мышь Huawei',
        count: 9,
        price: 2000,
        type: 'Мышь',
        description: 'Huawei M590',
    };
    const keys = 'type';
}
