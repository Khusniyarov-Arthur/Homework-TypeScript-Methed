import { Job } from "./class_Job";

export class Person {
  private _job?: Job;
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  set job (job: Job) {
    this._job = job;
  }
  
  getSalary() {
    if(this._job) {
      return this._job.salary
    }
    return;
  }

  work() {
    if(this._job) {
      return this._job.work(this.name)
    }
  }
}

