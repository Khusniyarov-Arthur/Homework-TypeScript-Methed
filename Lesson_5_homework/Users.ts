
  interface User {
  id: number, 
  firstname: string, 
  surname: string, 
  age: number,
}

export const enum sortTypes {ASC, DESC};

export abstract class Users<T extends User> {
  userList: T[] = []

  add(item: T) {
    this.userList.push(item)
  } 

  remove(id: number): boolean {

    if(this.userList.find(item => item.id === id)) {
      this.userList = this.userList.filter(item => item.id !== id)
      return true;
    } else {
      return false;
    }
  }

  getUserById(id: number) {
    if(this.userList.find(item => item.id === id)) {
      return this.userList.filter(item => item.id === id)
    } 
    return null;
  }

  sorted<K extends keyof T>(item: K, key: sortTypes = sortTypes.ASC):T[] {
    return this.userList.sort((a: T, b: T) => key === sortTypes.ASC ?
      a[item] > b[item] ? 1 : -1 :
      a[item] > b[item] ? -1 : 1);
  }
}
