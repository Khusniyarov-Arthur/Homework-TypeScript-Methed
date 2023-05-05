"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
;
class Users {
    userList = [];
    add(item) {
        this.userList.push(item);
    }
    remove(id) {
        if (this.userList.find(item => item.id === id)) {
            this.userList = this.userList.filter(item => item.id !== id);
            return true;
        }
        else {
            return false;
        }
    }
    getUserById(id) {
        if (this.userList.find(item => item.id === id)) {
            return this.userList.filter(item => item.id === id);
        }
        return null;
    }
    sorted(item, key = 0 /* sortTypes.ASC */) {
        return this.userList.sort((a, b) => key === 0 /* sortTypes.ASC */ ?
            a[item] > b[item] ? 1 : -1 :
            a[item] > b[item] ? -1 : 1);
    }
}
exports.Users = Users;
