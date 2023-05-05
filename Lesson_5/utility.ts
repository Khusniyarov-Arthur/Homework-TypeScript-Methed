{ /*Утилитпрные типы: */
  interface Goods {
    id: number
    title: string,
    count?: number,
    readonly price: number;
  }

  type partialGoods = Partial<Goods>;
  // получаем : 
//   type partialGoods = {
//     id?: number | undefined;
//     title?: string | undefined;
//     count?: number | undefined;
//     readonly price?: number | undefined;
// }
// Partial принимает ждинерик и делает все поля не обязательными


  type requiredGoods = Required<Goods>;
  // получаем : 
  // type requiredGoods = {
  //   id: number;
  //   title: string;
  //   count: number;
  //   readonly price: number;
  // }
  // Required принимает ждинерик и делает все поля обязательными


  type readonlyGoods = Readonly<Goods>;
  // получаем : 
  // type readonlyGoods = {
  //   readonly id: number;
  //   readonly title: string;
  //   readonly count?: number | undefined;
  //   readonly price: number;
  // }
  // Readonly принимает ждинерик и делает все поля доступными только для чтения


  type requiredReadonlyGoods = Required<Readonly<Goods>>;
  // получаем : 
  // type requiredReadonlyGoods = {
  //   readonly id: number;
  //   readonly title: string;
  //   readonly count: number;
  //   readonly price: number;
  // }
  // Required<Readonly<Goods> принимает ждинерик и делает все поля обязательными и доступными только для чтения


  //  И другие вариации так же возможны:
  type partialReadonlyGoods = Partial<Readonly<Goods>>;
  // получаем : 
  // type partialReadonlyGoods = {
  //   readonly id?: number | undefined;
  //   readonly title?: string | undefined;
  //   readonly count?: number | undefined;
  //   readonly price?: number | undefined;  
  // }


  type recordGoods = Record<number, Goods> /* принимает два джинерика, первый это тип наших ключей, а второй то что будет содержать наш Record*/ 

  const listGoods: recordGoods = {
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
  }
}

// Еще один вариант исполнения:
{
  interface Goods {
    id: number
    title: string,
    count?: number,
    readonly price: number;
  }
  const title = ['book', 'pen', 'pencil'] as const;
  type categoryTypes = typeof title[number];

  type recordGoods = Record<categoryTypes, Goods> /* принимает два джинерика, первый это тип наших ключей, а второй то что будет содержать наш Record*/ 
  const listGoods: recordGoods = {
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
  }

  // позволяет исключить какте то значени из Goods например id, хотя изночально в Goods был id
  type omitGoods = Omit<Goods, 'id'>;
  // type omitGoods = {
  //   title: string;
  //   count?: number | undefined;
  //   readonly price: number;
  // }

// позволяет взять только необходимые значения из Goods
  type pickGoods = Pick<Goods, 'title' | 'price'>
  // type pickGoods = {
  //   title: string;
  //   readonly price: number;
  // }


  const getGoods = ({title, price, count}: Omit<Goods, 'id'>): Goods => {
    return {
      id: Math.floor(Math.random() * 10e8),
      title,
      price,
      count,
    };
  };


// тут мы предает тип нашей функции getGoods и с помощью оператора RetunrType
// мы получаем тот тип который возвращает наша функция getGoods и записывам его 
// наш новый тип goods, который в дальнейшем можем применить для другой анологичной функции
  type goods = ReturnType<typeof getGoods>

  const doogsRes = getGoods({
    title: 'battary',
    price: 200,
    count: 100,
  });

  console.log(doogsRes);


  {
    const getGoods = (title: string, price: number, count: number): Goods => {
      return {
        id: Math.floor(Math.random() * 10e8),
        title,
        price,
        count,
      };
    };
    type p0 = Parameters<typeof getGoods>[0]
    // получаем:
    // type p = string

    type p1 = Parameters<typeof getGoods>[1]
    // получаем:
    // type p = number

    type p2 = Parameters<typeof getGoods>[2]
    // получаем:
    // type p = number
  }

}

{
  type omitGoods = Omit<Goods, 'id'>;
  type pickGoods = Pick<Goods, 'title' | 'price'>

  const getGoods = (): Promise<Goods[]> => fetch('https://api.com').then((response: Response) => response.json())

  type P = ReturnType<typeof getGoods>
    // получаем:
    // type P = Promise<Goods[]>


  type R = Awaited<ReturnType<typeof getGoods>>;
    // получаем:
    // type R = Goods[]
}