"use strict";
const log = (val, val2) => {
    console.log(val);
    console.log(val2);
    return val;
};
log('строка', 5);
log(5, 15);
function log2(val) {
    console.log(val);
    return val;
}
// ........................
const logFoo = (val) => {
    console.log(val);
    return val;
};
const c = logFoo(5);
const d = logFoo('string');
// ................................................
const filterArr = (arr, exclude) => arr.filter((item) => !exclude.includes(item));
const result = filterArr([1, 2, 3, 4, 5], [2, 4]);
console.log('result: ', result);
const filterArr2 = (arr, exclude) => arr.filter((item) => !exclude.includes(item));
const result2 = filterArr2([1, 2, 3, 4, 5], [2, 4]);
console.log('result2: ', result2);
const response = {
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
};
const response2 = {
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
};
const response3 = {
    success: true,
    data: 'Заказ оформлен ваш №168445'
};
console.log('response', response);
console.log('response2', response2);
console.log('response3', response3);
