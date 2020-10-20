export class PostDetails {

  constructor(
    public uid: string,
    public title: string,
    public description : string,
    public dateCreated: Date,
    public pid?: string
  ) { }

}

export class PostContent {

  constructor(
    public name: string,
    public fileFormat: string = 'image'
  ) {}
}

export class StickerDetails {

  constructor(
    public amountReleased: number,
    public price: number = 0
  ) {}
}

export class StickerContent {

  constructor(
    public name: string,
    public fileFormat: string = 'image'
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
    public uid: string,
    public dateCollected: Date
  ) {}
}

export class Post {

  constructor(
    public postDetails?: PostDetails,
    public postContent?: PostContent,
    public stickerContent? : StickerContent,
    public stickerDetails? : StickerDetails,
    public holderList?: Holder[],
    public commentList?: Comment[]
  ) {}
}


export class Posts {

  constructor(
    public pid: string,
    public post: Post
  ) {}
}
