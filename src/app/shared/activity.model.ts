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
    public collectorID: string,
    public collecteeID: string,
    public pid: string,
    public timeStamp: Date
  ) {}

}

export class Activity {

   constructor(
    public type: string,
    public views: number,
    public collected: number
   ) {}
}
