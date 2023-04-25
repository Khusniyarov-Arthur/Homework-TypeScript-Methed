type userL2T1 = {
  name: string,
  age: number,
  group: string,
};

const personsL2T1: userL2T1[] = [
  {
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    name: 'Вадим Хуснияров',
    age: 20,
    group: 'Семья',
  },
  {
    name: 'Дима Абалкарамов',
    age: 28,
    group: 'Работа',
  },
  {
    name: 'Иван Иванов',
    age: 33,
    group: 'Друзья',
  }
];

const logPersonL2T1 = (userL2T1: userL2T1) => {
  console.log(`${userL2T1.name}, ${userL2T1.age}`);
}

console.log('Users:');
personsL2T1.forEach(logPersonL2T1);

