enum StatusStudent {
  enrolle = 'enrolle',
  student = 'student',
  graduate = 'graduate',
  bachelor = 'bachelor',
}

abstract class Persons {
  age?: number;
  id: string = Math.random().toString(32).substring(2, 6) +
  Date.now().toString().substring(9);
  status: StatusStudent = StatusStudent.enrolle;
  protected createAt: Date = new Date();
  protected updateAt?: Date;

  constructor(name: string);
  constructor(name: string, age: number | undefined);
  constructor(public readonly name: string, age?: number | undefined) {
    if (typeof age === 'number') {
      this.age = age;
    }
  }

  getInfo(): string {
    if (this.age) {
      return `${this.name}, возраст ${this.age}`;
    }
    return this.name;
  }

  abstract logger(): void;
}

class Student extends Persons {
  static school: string = 'METHED'
  static count: number;

  name: string;
  course?: string;
  _module: number = 0;

  constructor(name: string);
  constructor(name: string, course: string);
  constructor(name: string, age: number);
  constructor(name: string, course: string, age: number);
  constructor(name: string, courseOrAge?: string | number, age?: number) {
    
    let ageOrUndefined: number | undefined;
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

  private changeUpdateDate(): void {
    this.updateAt = new Date();
  }

  set module(module: number) {
    this._module = module
    this.changeUpdateDate();
  }

  changeStatus(status: StatusStudent): void {
    this.status = status;
    this.changeUpdateDate();
  }

  changeInfo(course: string): void;
  changeInfo(module: number): void;
  changeInfo(course: string, module: number): void;
  changeInfo(courseOrModule: string | number, module?: number): void {
    if(typeof courseOrModule === 'string') {
      this.course = courseOrModule;
    }

    if(typeof courseOrModule === 'number') {
      this.module = courseOrModule;
    }

    if(module) {
      this.module = module;
    }

    this.changeUpdateDate();
  }

  override getInfo(): string {
    const info = super.getInfo();
    if(this.course) {
      return `${info}, учится на курсе ${this.course}`;
    }
    return info;
  }

  static createStudents(list: string[], course: string): Student[] {
    return list.map(name => new Student(name, course));
  }
  static createStudentFromPerson(person: Persons): Student
  static createStudentFromPerson(person: Persons, course: string): Student
  static createStudentFromPerson(person: Persons, course?: string): Student {
    if(person.age){
      if(course) {
      return new Student(person.name, course, person.age);
    }
    return new Student(person.name, person.age);
  }
    
    if(person.age) {
      return new Student(person.name, person.age);  
    }
    return new Student(person.name);
  }

  static {
    Student.count = 0;
  }

  logger(): void {
    console.log(this);
  }
}
// не можем использовать данный код т.к. класс Person теперь абсьрактный
// const person: Persons = new Persons('Sergei', 44);
// console.log('person: ', person.getInfo());

// const studentPer:Student = Student.createStudentFromPerson(person, 'Design');
// console.log('studentPer: ', studentPer);  


const student1: Student = new Student('Dima', 'JS', 33);
console.log('student1: ', student1.getInfo());

// student1.changeInfo('js', 4)

// console.log(Student.school);
// const students = Student.createStudents(['Ivan', 'Alex', 'Rinat'], 'React')

// console.log('students: ', students);



// console.log('student1', student1);

const student2: Student = new Student('Petr', 'Frontend');
student2.changeInfo('web')

console.log('student2', student2);

// const student3: Student = new Student('Arthur', 18);
// student3.changeInfo(2)
// console.log('student3', student3);

// const student4: Student = new Student('Gena', 'JS', 28);
// student4.changeInfo(3)
// console.log('student4', student4);


// console.log('count', Student.count);
