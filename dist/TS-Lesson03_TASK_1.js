"use strict";
;
const personsL3T1 = [
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
// const logPerson = (user: Person) => {
//   console.log(`${user.name}, ${user.age}`);
// };
// persons.forEach(logPerson);
const logPersonL3T1 = (personL3T1) => {
    let information;
    if ('role' in personL3T1) {
        information = personL3T1.role;
    }
    else {
        information = personL3T1.group;
    }
    console.log(`${personL3T1.name}, ${personL3T1.age}, ${information}`);
};
personsL3T1.forEach(logPersonL3T1);
