function addTwo(num: number):number {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {

}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

getUpper("hello");
addTwo(5);

signUpUser("Marcell", "@gmail", true);
loginUser("Marcell", "h");

function getValue(myVal: number) {
  if (myVal > 5) {
    return true;
  }
  return "200 OK"
}

const getHello = (s: string): string => {
  return "yes";
}

const heroes = ["thor", "hulk", "ironman"];
//const heroes = [1, 2, 3];

heroes.map((hero): string => {
  return `hero is ${hero}`
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {}