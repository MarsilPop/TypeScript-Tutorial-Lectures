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

  protected _courseCount = 1;

  private readonly city: string = "Budapest"
  constructor(
    public email: string, 
    public name: string,
    private userId: string = ""
    ) {
  }
  private deleteToken() {
    console.log("Token deleted");
    
  }

  get getAppleEmail(): string {
    return `apple${this.email}`
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) { //!no return type here!
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1!")
    } else {
      this._courseCount = courseNum
    }
  } 
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4
  }
}

const marcell = new User("m@gmail.com", "Marcell");
//marcell.city


