// enum StatusStudent {
//   enrolle = 'enrolle',
//   student = 'student',
//   graduate = 'graduate',
//   bachelor = 'bachelor',
// }

// class Student {
//   id: string;
//   status: StatusStudent;
//   createAt: Date;
//   updateAt?: Date;
//   name: string;
//   course: string;
//   _module: number = 0;

//   constructor(name: string, course: string) {
//     this.name = name;
//     this.course = course;
//     this.id = Math.random().toString(32).substring(2, 6) + Date.now().toString().substring(9);
//     this.status = StatusStudent.enrolle;
//     this.createAt = new Date();
//     this.updateAt = new Date();
//   }

//   get Info(): string {
//     return `${this.name} учится на курсе ${this.course}, на модуле ${this._module}`
//   }

//   set module(module: number) {
//     this._module = module
//     this.updateAt = new Date();
//   }

//   changeStatus(status: StatusStudent): void {
//     this.status = status;
//     this.updateAt = new Date();
//   }


// }
// const student: Student = new Student('Dima', 'Frontend');
// console.log('student', student);
// console.log(student.Info);

// setTimeout(() => {
//   student.module = 1;
//   student.status = StatusStudent.student
//   console.log('student', student);
// }, 3000)

// setTimeout(() => {
//   student.module = 2;
//   console.log('student', student);
// }, 5000)

// setTimeout(() => {
//   student.module = 2;
//   student.status = StatusStudent.graduate
//   console.log('student', student);
// }, 7000)