import { PostDataService } from './postdata.service';
import { ProfileDataService } from './profiledata.service';
import { Url } from './url.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { PostService } from './post.service';
import { Biography, PersonalDetails, Profile, ProfileDetails, Profiles, ProfileStickers, DisplayPicture } from './profile.model';
import { Post, PostDetails, Posts } from './post.model';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url = new Url;

  private profileDetailsList: {uid: string, obs: BehaviorSubject<ProfileDetails>}[] = [];
  private profileStickersList: {uid: string, obs: BehaviorSubject<ProfileStickers>}[] = [];
  private displayPicturesList: {uid: string, obs: BehaviorSubject<DisplayPicture>}[] = [];
  private mapUIDtoPRID: {uid: string, prid: string}[] = [];
  private profilePostsList: {uid: string, obs: BehaviorSubject<string[]>}[] = [];

  constructor(private http: HttpClient,
              private postService: PostService,
              private profileDataService: ProfileDataService,
              private postDataService: PostDataService) { }


  updateProfileDetails(uid: string, profileDetails: ProfileDetails) {
    let index = this.profileDetailsList.findIndex(data => data.uid === uid);

    if (index != -1) {
      this.profileDetailsList[index].obs.next(profileDetails);
    }
  }

  updateProfileStickers(uid: string, profileStickers: ProfileStickers) {
    let index = this.profileStickersList.findIndex(data => data.uid === uid);
    if (index != -1) {
      this.profileStickersList[index].obs.next(profileStickers);
    }
  }

  updateDisplayPicture(uid: string, displayPicture: DisplayPicture) {
    let index = this.displayPicturesList.findIndex(data => data.uid === uid);
    if (index != -1) {
      this.displayPicturesList[index].obs.next(displayPicture);
    }
  }

  updateMapUIDtoPRID(uid: string, newPrid: string) {
    let index = this.mapUIDtoPRID.findIndex(value => {
      return value.uid === uid;
    });

    if (index != -1) {
      this.mapUIDtoPRID[index].prid = newPrid;
    }
  }

  getProfileDetails(uid: string) {
    let index = this.profileDetailsList.findIndex(profileDetails => {
      return profileDetails.uid === uid;
    })
    if (index === -1) {
      this.profileDetailsList.push({uid: uid, obs: new BehaviorSubject<ProfileDetails>(null)});
      let secIndex = this.profileDetailsList.length - 1;
      this.profileDataService.fetchProfileDetails(uid).subscribe(data=> {
        for (let key in data) {
          this.profileDetailsList[secIndex].obs.next(new ProfileDetails(data[key].username, data[key].bio));
          this.mapUIDtoPRID.push({uid: uid,prid: key});
        }
      })
      return this.profileDetailsList[secIndex].obs;
    } else {
      return this.profileDetailsList[index].obs;
    }
  }

  getProfileStickers(uid: string) {
    let index = this.profileStickersList.findIndex(profileSticker => {
      return profileSticker.uid === uid;
    })
    if (index === -1) {
      this.profileStickersList.push({uid: uid, obs: new BehaviorSubject<ProfileStickers>(null)});
      let secIndex = this.profileStickersList.length - 1;
      this.profileDataService.fetchProfileStickers(uid).subscribe(data=> {
        this.profileStickersList[secIndex].obs.next(new ProfileStickers(data));
      })
      return this.profileStickersList[secIndex].obs;
    } else {
      return this.profileStickersList[index].obs;
    }
  }

  getDisplayPicture(uid: string) {
    let index = this.displayPicturesList.findIndex(dp => {
      return dp.uid === uid;
    })
    if (index === -1) {
      this.displayPicturesList.push({uid: uid, obs: new BehaviorSubject<DisplayPicture>(null)});
      let secIndex = this.displayPicturesList.length - 1;
      this.profileDataService.fetchDisplayPicture(uid).subscribe(data=> {
        for (let key in data) {
          this.displayPicturesList[secIndex].obs.next(new DisplayPicture(key, data[key].displayPicture));
        }
      })
      return this.displayPicturesList[secIndex].obs;
    } else {
      return this.displayPicturesList[index].obs;
    }
  }

  getPRIDfromUID(uid: string) {
    return this.mapUIDtoPRID.find(value => {
      return value.uid === uid;
    }).prid;
  }

  getUserProfilePosts(uid: string) {
    let index = this.profilePostsList.findIndex(profile => {
      return profile.uid === uid;
    })
    if (index === -1) {
      this.profilePostsList.push({uid: uid, obs: new BehaviorSubject<string[]>(null)});
      let secIndex = this.profilePostsList.length - 1;
      let profilePosts: string[] = [];
      this.postDataService.fetchUserPostDetails(uid).subscribe(data=> {
        for (let key in data) {
          profilePosts.push(key);
          this.postService.updatePostDetails(key, new PostDetails( data[key].uid,
                                                                    data[key].title,
                                                                    data[key].description,
                                                                    data[key].dateCreated,
                                                                    data[key].price));
        }
        this.profilePostsList[secIndex].obs.next(profilePosts);
      });
      return this.profilePostsList[secIndex].obs;
    } else {
      let profilePosts: string[] = [];
      this.postDataService.fetchUserPostDetails(uid).subscribe(data => {
        for (let key in data) {
          profilePosts.push(key);
          this.postService.updatePostDetails(key, new PostDetails( data[key].uid,
                                                                    data[key].title,
                                                                    data[key].description,
                                                                    data[key].dateCreated,
                                                                    data[key].price));
        }
        this.profilePostsList[index].obs.next(profilePosts);
      });
      return this.profilePostsList[index].obs;
    }
  }

}
