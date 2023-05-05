import { Users } from "./Users"
interface Employee {
  id: number, 
  firstname: string, 
  surname: string, 
  age: number,
  post: string,
}

export class Employees extends Users<Employee> {}
