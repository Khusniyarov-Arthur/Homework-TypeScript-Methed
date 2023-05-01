import {Job} from "./class_Job";
import {Person} from "./class_Person";

const manager = new Job('Manager', 100000)
const developer = new Job('Developer', 200000)
const driver = new Job('Driver', 80000)


const Maks = new Person('Maks');
Maks.job = manager;
console.log('Maks: ', Maks);

Maks.work();
console.log('Maks salary', Maks.getSalary());

Maks.job = driver;
Maks.work();
console.log('Maks salary', Maks.getSalary());
console.log('Maks: ', Maks);


const Nika = new Person('Nika');
Nika.job = developer;
console.log('Nika: ', Nika);

Nika.work();
console.log('Nika salary', Nika.getSalary());

Nika.job = manager;
Nika.work();
console.log('Nika salary', Nika.getSalary());



