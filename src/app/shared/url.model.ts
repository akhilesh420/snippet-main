export class Url {

  constructor(
    public _urlPost = 'https://snippet-web-9818a-a9782.firebaseio.com/',
    public _urlComment = 'https://snippet-web-9818a-279e6comment.firebaseio.com/',
    public _urlProfile = 'https://snippet-web-9818a-fb38d-profile.firebaseio.com/',
    public _urlPersonal = 'https://snippet-web-9818a-b962cpersonal.firebaseio.com/'
  ) {}

  get urlPost() {
    return this._urlPost;
  }

  get urlComment() {
    return this._urlComment;
  }

  get urlProfile() {
    return this._urlProfile;
  }

  get urlPersonal() {
    return this._urlPersonal
  }
}
