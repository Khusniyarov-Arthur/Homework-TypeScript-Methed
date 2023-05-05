const log =<T, B>(val: T, val2: B): T => {
  console.log(val);
  console.log(val2);
  return val;
}

log<string, number>('строка', 5)
log(5, 15)

function log2<T>(val: T): T {
  console.log(val);
  return val;
}
// ........................

const logFoo = (val: number | string): number | string => {
  console.log(val);
  return val;
}

const c = logFoo(5);
const d = logFoo('string');

// ................................................
const filterArr = <T>(arr: T[], exclude: T[]): T[] => 
  arr.filter((item) => !exclude.includes(item));

const result =  filterArr<number>([1, 2, 3, 4, 5], [2, 4]);
console.log('result: ', result);


// ............................................

type filterArray = <T>(arr: T[], exclude: T[]) => T[];

const filterArr2: filterArray = (arr, exclude) =>
  arr.filter((item) => !exclude.includes(item))

  const result2 = filterArr2<number>([1, 2, 3, 4, 5], [2, 4])
  console.log('result2: ', result2);
  


// Перепишем данный пример добавив в него джинерики т.к. наш тип не 
// удовлетворяет условиям функции response2, иначе нужно сождовать 
// дополнительный тип HttpResponse2 с возможностью указания 
// в data отличные типы............................
// 
// type HttpResponse = {
//   success: boolean;
//   error?: boolean;
//   data?: {
//     id: number;
//     title: string;
//     count: number;
//   }[];
// }

// type HttpResponse2 = {
//   success: boolean;
//   error?: boolean;
//   data?: {
//     name: string;
//     post: string;
//   }[];
// }

// const response: HttpResponse = {
//   success: true,
//   error: false,
//   data: [
//     {
//       id: 21,
//       title: 'string',
//       count: 25,
//     },
//     {
//       id: 22,
//       title: 'string',
//       count: 50,
//     }
//   ]
// }

// const response2: HttpResponse2 = {
//   success: true,
//   data: [
//     {
//       name: 'Ivan',
//       post: 'Manager',
//     },
//     {
//       name: 'Ivan',
//       post: 'Security',
//     }
//   ]
// }

// console.log('response', response);
// console.log('response2', response2);

// Переписали пример который был выше с применением джинерика

// type HttpResponse<T> = {
//   success: boolean;
//   error?: boolean;
//   data?: T;
// }

// type product ={
//   id: number;
//   title: string;
//   count: number;
// }

// type person ={
//   name: string;
//   post: string;
// }

// const response: HttpResponse<product[]> = {
//   success: true,
//   error: false,
//   data: [
//     {
//       id: 21,
//       title: 'string',
//       count: 25,
//     },
//     {
//       id: 22,
//       title: 'string',
//       count: 50,
//     }
//   ]
// }

// const response2: HttpResponse<person[]> = {
//   success: true,
//   data: [
//     {
//       name: 'Ivan',
//       post: 'Manager',
//     },
//     {
//       name: 'Ivan',
//       post: 'Security',
//     }
//   ]
// }

// const response3: HttpResponse<string> = {
//   success: true,
//   data: 'Заказ оформлен ваш №168445'
// }
// console.log('response', response);
// console.log('response2', response2);
// console.log('response3', response3);

// Переписали пример который был выше расширив типы
interface HttpResponseError {
  success: false;
  error: string;
}

interface HttpResponseSucces<T> {
  success: true;
  data: T;
}

type HttpResponse<T> = HttpResponseError | HttpResponseSucces<T>

interface product {
  id: number;
  title: string;
  count: number;
}

interface person {
  name: string;
  post: string;
}

const response: HttpResponse<product[]> = {
  success: true,
  data: [
    {
      id: 21,
      title: 'string',
      count: 25,
    },
    {
      id: 22,
      title: 'string',
      count: 50,
    }
  ]
}

const response2: HttpResponse<person[]> = {
  success: true,
  data: [
    {
      name: 'Ivan',
      post: 'Manager',
    },
    {
      name: 'Ivan',
      post: 'Security',
    }
  ]
}

const response3: HttpResponse<string> = {
  success: true,
  data: 'Заказ оформлен ваш №168445'
}
console.log('response', response);
console.log('response2', response2);
console.log('response3', response3);