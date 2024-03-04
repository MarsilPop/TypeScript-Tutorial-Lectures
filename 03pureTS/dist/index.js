"use strict";
//class User {
//  email: string
//  name: string
//  private readonly city: string = "Budapest"
//  constructor(email: string, name: string) {
//    this.email = email;
//    this.name = name;
//  }
//}
class User {
    constructor(email, name, userId = "") {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "Budapest";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1!");
        }
        else {
            this._courseCount = courseNum;
        }
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const marcell = new User("m@gmail.com", "Marcell");
//marcell.city
