import { Students } from "./Student";
import { Employees } from "./Employee";
import { sortTypes } from "./Users";

const students = new Students();

students.add({
  id: 1, 
  firstname: 'Ivan', 
  surname: 'Petrov', 
  age: 18,
  year: 1,
  specialty: 'Developer',
});

students.add({
  id: 2, 
  firstname: 'Alex', 
  surname: 'Pool', 
  age: 22,
  year: 5,
  specialty: 'History',
});

students.add({
  id: 3, 
  firstname: 'Max', 
  surname: 'Pain', 
  age: 19,
  year: 2,
  specialty: 'Economy',
});

students.add({
  id: 4, 
  firstname: 'Luke', 
  surname: 'Bessone', 
  age: 20,
  year: 3,
  specialty: 'Cinema',
});

students.add({
  id: 5, 
  firstname: 'Igor', 
  surname: 'Negoda', 
  age: 21,
  year: 4,
  specialty: 'Engineer',
});


const employees = new Employees();

employees.add({
  id: 6, 
  firstname: 'Panchu', 
  surname: 'Kalinovich', 
  age: 55,
  post: 'Chief Engineer',
});

employees.add({
  id: 7, 
  firstname: 'Sergey', 
  surname: 'Ogursov', 
  age: 59,
  post: 'Director',
});

console.log('ADD', students);
console.log('ADD', employees);


const removeStudent = students.remove(5)
const removeEmployee = employees.remove(6)

console.log('REMOVE Student', removeStudent, students);
console.log('REMOVE Employee', removeEmployee, employees);

const getStudent = students.getUserById(1)
const getEmployee = employees.getUserById(6)

console.log(getStudent);
console.log(getEmployee);

console.log('firstname', students.sorted('firstname', sortTypes.ASC));
console.log('year', students.sorted('year'));





