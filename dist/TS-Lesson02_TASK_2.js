"use strict";
const personsTask_2 = [
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
        role: 'Администратор',
    }
];
// В изначальном примере было именно так, 
// но с типом User будет ошибка, поэтому я его заменил на Person. 
// Либо пример ошибочный, либо я не верно выполнил задание
// const logPersonTask_2 = (user: User) => {
const logPersonTask_2 = (user) => {
    console.log(`${user.name}, ${user.age}`);
};
personsTask_2.forEach(logPersonTask_2);
