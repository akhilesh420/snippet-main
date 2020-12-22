export class ProfileDetails {

  constructor(
    public username: string,
    public description: string,
    public link: string
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

export class OnBoarding {

  constructor(
    public onBoarding: boolean,
    public onBoardingStep: number,
    public marketingRound: string,
    public batch: string,
    public timeTaken: number[]
  ) {}
}
