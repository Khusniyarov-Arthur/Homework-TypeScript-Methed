"use strict";
var StatusStudent;
(function (StatusStudent) {
    StatusStudent["enrolle"] = "enrolle";
    StatusStudent["student"] = "student";
    StatusStudent["graduate"] = "graduate";
    StatusStudent["bachelor"] = "bachelor";
})(StatusStudent || (StatusStudent = {}));
class Persons {
    name;
    age;
    id = Math.random().toString(32).substring(2, 6) +
        Date.now().toString().substring(9);
    status = StatusStudent.enrolle;
    createAt = new Date();
    updateAt;
    constructor(name, age) {
        this.name = name;
        if (typeof age === 'number') {
            this.age = age;
        }
    }
    getInfo() {
        if (this.age) {
            return `${this.name}, возраст ${this.age}`;
        }
        return this.name;
    }
}
class Student extends Persons {
    static school = 'METHED';
    static count;
    name;
    course;
    _module = 0;
    constructor(name, courseOrAge, age) {
        let ageOrUndefined;
        if (typeof courseOrAge === 'number') {
            ageOrUndefined = courseOrAge;
        }
        if (age) {
            ageOrUndefined = age;
        }
        super(name, ageOrUndefined);
        this.name = name;
        if (typeof courseOrAge === 'string') {
            this.course = courseOrAge;
            this.changeStatus(StatusStudent.student);
        }
        Student.count++;
    }
    changeUpdateDate() {
        this.updateAt = new Date();
    }
    set module(module) {
        this._module = module;
        this.changeUpdateDate();
    }
    changeStatus(status) {
        this.status = status;
        this.changeUpdateDate();
    }
    changeInfo(courseOrModule, module) {
        if (typeof courseOrModule === 'string') {
            this.course = courseOrModule;
        }
        if (typeof courseOrModule === 'number') {
            this.module = courseOrModule;
        }
        if (module) {
            this.module = module;
        }
        this.changeUpdateDate();
    }
    getInfo() {
        const info = super.getInfo();
        if (this.course) {
            return `${info}, учится на курсе ${this.course}`;
        }
        return info;
    }
    static createStudents(list, course) {
        return list.map(name => new Student(name, course));
    }
    static createStudentFromPerson(person, course) {
        if (person.age) {
            if (course) {
                return new Student(person.name, course, person.age);
            }
            return new Student(person.name, person.age);
        }
        if (person.age) {
            return new Student(person.name, person.age);
        }
        return new Student(person.name);
    }
    static {
        Student.count = 0;
    }
    logger() {
        console.log(this);
    }
}
// не можем использовать данный код т.к. класс Person теперь абсьрактный
// const person: Persons = new Persons('Sergei', 44);
// console.log('person: ', person.getInfo());
// const studentPer:Student = Student.createStudentFromPerson(person, 'Design');
// console.log('studentPer: ', studentPer);  
const student1 = new Student('Dima', 'JS', 33);
console.log('student1: ', student1.getInfo());
// student1.changeInfo('js', 4)
// console.log(Student.school);
// const students = Student.createStudents(['Ivan', 'Alex', 'Rinat'], 'React')
// console.log('students: ', students);
// console.log('student1', student1);
const student2 = new Student('Petr', 'Frontend');
student2.changeInfo('web');
console.log('student2', student2);
// const student3: Student = new Student('Arthur', 18);
// student3.changeInfo(2)
// console.log('student3', student3);
// const student4: Student = new Student('Gena', 'JS', 28);
// student4.changeInfo(3)
// console.log('student4', student4);
// console.log('count', Student.count);
