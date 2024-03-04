abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string
  ) {}

  abstract getSepia(): void
  getReelTime(): number {
    // some calc happening here
    return 8
  } 
}


class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
    ){
      super(cameraMode, filter)
    }

    getSepia(): void {
      console.log("sepia");
      
    }
}

const marcellp = new Instagram('test', 'test', 3);

marcellp.getReelTime();

// You can't redeclare the class but you can make new ones by inheriting it