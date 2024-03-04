let score: number | string = 33;

score = 44

score = "33"

type User = {
  name: string,
  id: number
}

type Admin = {
  userName: string,
  id: number
}

let marcell: User | Admin = {
  name: "Marcell",
  id: 444
}

marcell = {
  userName: "Walqu",
  id: 543
}

//function getDbId(id: number | string) {
  // making some API calls
//  console.log(`DB id is: ${id}`);
//}
getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLocaleLowerCase();
  } else {
    id.toFixed();
  }
  
}

// array

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number)[] = ["1", "2", 3];

let seatAllotment: "aisle" | "middle" | "window"
