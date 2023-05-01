export class Job {
  private role: string;
  private _salary: number;

  constructor(role: string, salary: number) {
    this.role = role;
    this._salary = salary;
  }

  get salary() {
    return this._salary;
  }

  work(personName: string) {
    console.log(`${personName} сейчас работает как ${this.role}`);
  }
}
