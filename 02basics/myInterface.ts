interface User {
  readonly dbId: number,
  email: string,
  userId: number,
  googleId?: number,
  //startTrial: () => string
  startTrial(): string
  getCoupon(couponname: string, value: number): number
}

interface User {
  githubToken: string
}

interface Admin extends User {
  role: "admin" | "ta" | "learner"
}

const marcell: Admin = {
  dbId: 1,
  role: "admin",
  githubToken: "github",
  email: "m@gmail.com",
  userId: 999,
  startTrial: () => {
    return "Good job!"
  },
  getCoupon: (name: "marcell", off: 10) => {
    return 4;
  }
}
