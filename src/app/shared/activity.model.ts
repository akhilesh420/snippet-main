export class View {

  constructor(
    public viewerID: string,
    public vieweeID: string,
    public pid: string,
    public timeStamp: Date
  ) {}
}

export class Collection {

  constructor(
    public collectorID: string, // collectorID: UID of the person who collected the sticker
    public collecteeID: string, // collecteeID: UID of the person whose sticker was collected
    public pid: string,
    public timeStamp: number
  ) {}

}

export class Activity {

   constructor(
    public id: string,
    public type: string,
    public views: number,
    public collected: number
   ) {}
}
