{
  interface Goods {
  title: string,
  count: number,
  }

  const getCountGoods = <T extends Goods>(arr: T[], title:string): number => {
    const goods = arr.find(item => item.title === title);
    return goods?.count ?? 0
  }

  const goods: Goods[] = [
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

  const countP = getCountGoods(goods, 'Notepad')
  console.log('countP: ', countP);
}

{
  interface Goods {
  title: string,
  count: number,
  price: number,
  }

  abstract class Cart<T extends Goods> {
    protected goods: T[] = [];

    public add(item: T): void {
      this.goods.push(item);
    }

    public get(title: string): T | null {
      return this.goods.find(item => item.title === title) ?? null;
    }

    public get totalPrice(): number {
      return this.goods.reduce((acc, item) => acc + item.price * item.count, 0)
    }
  }

  interface TechGoods {
    title: string,
    count: number,
    price: number,
    type: string,
    description: string,
  }
  
  class TechCart extends Cart<TechGoods> {}

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
  interface Goods {
  title: string,
  count: number,
  }

  const getCountGoods = <T extends Goods>(arr: T[], title:string): number => {
    const goods = arr.find(item => item.title === title);
    return goods?.count ?? 0
  }

  const goods: Goods[] = [
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

  const countP = getCountGoods(goods, 'Notepad')
  console.log('countP: ', countP);
}

{
  interface Goods {
  title: string,
  count: number,
  price: number,
  }

  type KeysOfGoods = keyof Goods;
// Можно написать и так:
// const filter = ( arr: Goods[], key: KeysOfGoods, value :string | number) => {
// const filter = ( arr: Goods[], key: KeysOfGoods, value :Goods[KeysOfGoods]) => {
  const filter = <T, K extends keyof T>( arr: T[], key: K, value :T[K]) => {
    return arr.filter((item: T) => item[key] === value);
  } 

  abstract class Cart<T extends Goods> {
    public goods: T[] = [];

    public add(item: T): void {
      this.goods.push(item);
    }

    public get(title: string): T | null {
      return this.goods.find(item => item.title === title) ?? null;
    }

    public get totalPrice(): number {
      return this.goods.reduce((acc, item) => acc + item.price * item.count, 0)
    }
  }

  interface TechGoods {
    title: string,
    count: number,
    price: number,
    type: string,
    description: string,
  }
  
  class TechCart extends Cart<TechGoods> {}

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

  const res = filter(techCart.goods, 'price', 70000)
  console.log('res: ', res);
  const res2 = filter(techCart.goods, 'type', 'Ноутбук')
  console.log('res2: ', res2);


  const goods: TechCart['goods'][number] = {
    title: 'Ноутбук Huawei',
    count: 2,
    price: 70000,
    type: 'Ноутбук',
    description: 'Huawei MateBook 16',
  };

  const goods2: typeof goods = {
    title: 'Мышь Huawei',
    count: 9,
    price: 2000,
    type: 'Мышь',
    description: 'Huawei M590',
  }
}

// Видео 2: 13 минута

{
  interface Goods {
  title: string,
  count: number,
  price: number,
  }

  type KeysOfGoods = keyof Goods;

  const filter = <T, K extends keyof T>( arr: T[], key: K, value :T[K]) => {
    return arr.filter((item: T) => item[key] === value);
  } 

  const categories = ['Монитор', 'Ноутбук', 'Мышь'] as const;

  type categoryTypes = typeof categories[number];

  abstract class Cart<T extends Goods> {
    public goods: T[] = [];

    public add(item: T): void {
      this.goods.push(item);
    }

    public get(title: string): T | null {
      return this.goods.find(item => item.title === title) ?? null;
    }

    public get totalPrice(): number {
      return this.goods.reduce((acc, item) => acc + item.price * item.count, 0)
    }
  }

  interface TechGoods {
    title: string,
    count: number,
    price: number,
    type: categoryTypes,
    description: string,
  }
  
  class TechCart extends Cart<TechGoods> {}

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

  const res = filter(techCart.goods, 'price', 70000)
  console.log('res: ', res);
  const res2 = filter(techCart.goods, 'type', 'Ноутбук')
  console.log('res2: ', res2);


  const goods: TechCart['goods'][number] = {
    title: 'Ноутбук Huawei',
    count: 2,
    price: 70000,
    type: 'Ноутбук',
    description: 'Huawei MateBook 16',
  };

  const goods2: typeof goods = {
    title: 'Мышь Huawei',
    count: 9,
    price: 2000,
    type: 'Мышь',
    description: 'Huawei M590',
  }

  type keyOfGoods = keyof typeof goods;

  const keys: keyOfGoods = 'type';



}

