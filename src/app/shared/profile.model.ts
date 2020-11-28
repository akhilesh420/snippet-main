export class Biography {

  constructor(
    public title: string,
    public location: string,
    public content: string) { }
}

export class ProfileDetails {

  constructor(
    public username: string,
    public bio: Biography,
    public onBoarding?: boolean,
    public onBoardingStep?: number
  ) {}
}

export class ProfileSticker {

  constructor(
    public pid: string,
    public dateCreated: Date
  ) {}
}

export class DisplayPicture {

  constructor(
    public dateCreated: Date,
    public fileFormat: string
  ) {}
}


export class PersonalDetails {

  constructor(
    public name: string,
    public email: string,
    public dateOfBirth: Date,
    public dateCreated: Date
  ) {}
}

export class Profile {

  constructor(
    public profileDetails: ProfileDetails,
    public profileStickers?: ProfileSticker[],
    public personalDetails?: PersonalDetails,
    public displayPicture?: DisplayPicture
  ) {}
}

export class Profiles {

  constructor(
    public uid: string,
    public profile: Profile
  ) {}
}
