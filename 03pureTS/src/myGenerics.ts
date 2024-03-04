const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val
}

function identityTwo(val: any): any {
  return val
}

function identityThree<Type>(val: Type): Type {
  return val
}

//identityThree(true)

function identityFour<T>(val: T): T {
  return val
}

interface Bottle {
  brand: string,
  type: number
}

function getSearchProduct<T>(product: T[]): T {
  //do some database operation
  const myIndex = 3
  return product[myIndex]
}

// how to convert this into a => function

const getMoreSearchProducts = <T,>(products: T[]): T => {
  // do some database operations
  const myIndex = 5
  return products[myIndex]
}

interface Database {
  connection: string,
  username: string,
  password: string
}

// , means that this is now html but a GENERIC!

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U): object {
  return {
    valOne,
    valTwo
  }
}

//anotherFunction(3, {connection: "hello", username: "Marcell", password:"2"});

interface Quiz {
  name: string,
  type: string
}

interface Course {
  name: string, 
  author: string,
  subject: string
}

class Sellable<T> {
  public cart: T[] = []

  addToCart(product: T) {
    this.cart.push(product)
  }
}