//const User = {
//  name: "Marcell",
//  email: "example@gmail.com",
//  isActive: true
//}

//function createUser({name: string, isPaid: boolean}) {

//}

//createUser({name: "Marcell", isPaid: false})

//function createCourse():{name: string, price: number} {
//  return {name: "Marcell", price:399}
//}

//type User = {
//  name: string,
//  email: string,
//  isActive: boolean
//}

//function createUser(user: User): User {
//  return {name:"", email:"", isActive: true}
//}

//createUser({name:"", email:"", isActive: true})

type User = {
  readonly _id: string,
  name: string,
  email: string,
  isActive: boolean,
  creditcardDetails?: number
}

let myUser: User = {
  _id: "1234",
  name: "Marcell",
  email: "p@p.com",
  isActive: true
}

type cardNumber = {
  cardnumber: string,
}

type cardDate = {
  cardDate: string,
}

type cardDetails = cardNumber & cardDate & {
  cvv: number
}

myUser.email = "m@g.com"



export{}