"use strict";
const persons = [
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
const logPerson = (user) => {
    console.log(`${user.name}, ${user.age}`);
};
console.log('Users:');
persons.forEach(logPerson);
