export class PostDetails {

  constructor(
    public title: string,
    public description : string
  ) { }

}

export class PostContent {

  constructor(
    public name: string,
    public width: number,
    public height: number,
    public fileFormat: string = 'image'
  ) {}
}

export class StickerDetails {

  constructor(
    public amountReleased: number,
    public price: number = 0
  ) {}
}

export class Comment {

  constructor(
    public uid: string,
    public commentDetails: string,
    public dateCreated: Date
  ) {}
}

export class Holder {

  constructor(
    public cid: Date,
    public timeStamp: string,
    public collectorID: string
  ) {}
}

export class CustomMetadata {

  constructor(
    public uid: string,
    public width: string,
    public height: string
  ) {}
}

export class Feed {

  constructor(
    public pid: string,
    public creatorID: string,
    public dateCreated: Date,
    public deleted: boolean
  ) {}
}
