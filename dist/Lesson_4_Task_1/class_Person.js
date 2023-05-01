"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    _job;
    name;
    constructor(name) {
        this.name = name;
    }
    set job(job) {
        this._job = job;
    }
    getSalary() {
        if (this._job) {
            return this._job.salary;
        }
        return;
    }
    work() {
        if (this._job) {
            return this._job.work(this.name);
        }
    }
}
exports.Person = Person;
