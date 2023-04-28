"use strict";
class Job {
    role;
    _salary;
    constructor(role, salary) {
        this.role = role;
        this._salary = salary;
    }
    get salary() {
        return this._salary;
    }
    work(personName) {
        console.log(`${personName} сейчас работает как ${this.role}`);
    }
}
class Persona {
    _job;
    name;
    constructor(name) {
        this.name = name;
    }
    set job(job) {
        this._job = job;
    }
}
const works = [
    { role: 'Manager1', salary: 100 },
    { role: 'Manager2', salary: 200 },
    { role: 'Manager3', salary: 300 },
];
const worksList = works.map(item => new Job(item.role, item.salary));
console.log(worksList);
const person1 = new Persona('jopa');
console.log('person1: ', person1);
