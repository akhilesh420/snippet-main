import { map } from 'rxjs/operators';
import { Url } from './url.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

import { PostService } from './post.service';
import { Biography, PersonalDetails, Profile, ProfileDetails, Profiles, ProfileSticker, DisplayPicture } from './profile.model';
import { StylesCompileDependency } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {


  url = new Url;
  pridTemp: string;

  constructor(private http: HttpClient, private postService: PostService) { }

  addProfileSticker(profileSticker: ProfileSticker, uid: string) {
    const urlPoint = this.url.urlProfile + "profile_stickers.json";
    const newData = {uid: uid, pid: profileSticker.pid,dateCreated: profileSticker.dateCreated};
    return this.http.post(urlPoint, newData)
  }

  addProfileDetails(data: ProfileDetails, uid: string) {
    const urlPoint = this.url.urlProfile + "profile_details.json";
    const newData = {...data, uid: uid};
    return this.http.post(urlPoint, newData)
  }

  addUsername(username: string) {
    const urlPoint = this.url.urlProfile + "username.json";
    let newData =  {username: username};
    // newData[username] = true;
    return this.http.post(urlPoint, newData)
  }

  addPersonalDetails(data: PersonalDetails, uid: string) {
    const urlPoint = this.url.urlPersonal + "personal_details.json";
    const newData = {...data, uid: uid};
    return this.http.post(urlPoint, newData);
  }

  addDisplayPicture(displayPicture: DisplayPicture, uid: string) {
    const urlPoint = this.url.urlProfile + "display_picture.json";
    let data = {displayPicture: displayPicture.content, uid: uid};
    return this.http.post(urlPoint, data);
  }

  addCollection(data: string[], uid: string) {
    const urlPoint = this.url.urlProfile + "collection.json";
    const newData = {collectors: data , uid: uid};
    return this.http.post(urlPoint, newData);
  }

  fetchProfileDetails(uid: string) {
    const urlPoint = this.url.urlProfile + 'profile_details.json?orderBy="uid"&equalTo="'+uid+'"';
    return this.http
    .get(urlPoint);
  }

  fetchUsername(username: string) {
    const urlPoint = this.url.urlProfile + 'username.json?orderBy="username"&equalTo="'+username+'"';
    return this.http.get(urlPoint)
  }

  fetchPersonalDetails(uid: string) {
    const urlPoint = this.url.urlProfile + 'personal_details.json?orderBy="uid"&equalTo="'+uid+'"';
    return this.http.get(urlPoint);
  }

  fetchProfileStickers(uid: string) {
    const urlPoint = this.url.urlProfile + 'profile_stickers.json?orderBy="uid"&equalTo="'+uid+'"';
    return this.http
    .get(urlPoint)
      .pipe(map(data => {
        let dataArray: ProfileSticker[] = [];
        for (let key in data) {
          let dateCreated = data[key].dateCreated;
          if (!dateCreated) {dateCreated = new Date();}
          dataArray.push(new ProfileSticker(key, data[key].pid, new Date(dateCreated)));
        }
        return dataArray;
      }));
  }

  fetchDisplayPicture(uid: string) {
    const urlPoint = this.url.urlProfile + 'display_picture.json?orderBy="uid"&equalTo="'+uid+'"';
    return this.http.get(urlPoint);
  }

  fetchCollection(pid: string) {
    const urlPoint = this.url.urlProfile + "collection.json";
    let searchParams = new HttpParams();
    searchParams = searchParams.append('orderByChild', 'pid&equalTo=' + pid);
    return this.http
    .get(
      urlPoint,
      {
        params: searchParams
      });
  }

  deleteProfileStickers(psid: string) {
    const urlPoint = this.url.urlProfile + "profile_stickers/"+psid+".json";
    return this.http.delete(urlPoint)
  }

  deleteProfileDetails(prid: string) {
    const urlPoint = this.url.urlProfile + "profile_details/"+prid+".json";
    return this.http.delete(urlPoint)
  }

  deleteDisplayPicture(dpid: string) {
    const urlPoint = this.url.urlProfile + "display_picture/"+dpid+".json";
    return this.http.delete(urlPoint)
  }

}
