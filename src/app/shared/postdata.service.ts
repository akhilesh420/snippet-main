import { Post } from 'src/app/shared/post.model';
import { Injectable } from '@angular/core';

import { Holder, PostContent, PostDetails, StickerDetails, StickerContent } from './post.model';
import { Url } from './url.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  url = new Url;

  constructor(private http: HttpClient) { }

  getPostDetails() {
    const urlPoint = this.url.urlPost + "post_details.json";
    return this.http.get(urlPoint);
  }

  addPostDetails(data: PostDetails) {
    const urlPoint = this.url.urlPost + "post_details.json";
    return this.http.post(urlPoint, data);
  }

  addPostContent(data: PostContent, pid: string) {
    const urlPoint = this.url.urlPost+ "post_content.json";
    const newData = {...data, pid: pid};
    return this.http.post(urlPoint, newData);
  }

  addStickerContent(data: any, pid: string) {
    const urlPoint = this.url.urlPost + "sticker_content.json";
    const newData = {data, pid: pid};
    return this.http.post(urlPoint, newData);
  }

  addStickerDetails(stickerDetails: StickerDetails, pid: string, uid: string, scid: string) {
    const urlPoint = this.url.urlPost + "sticker_details.json";
    const newData = {amountReleased: stickerDetails.amountReleased , uid: uid, pid: pid, scid: scid};
    return this.http.post(urlPoint, newData);
  }

  addSCL(uid: string, pid: string) {
    const urlPoint = this.url.urlPersonal + "sticker_collection_list.json";
    const newData = {uid: uid, pid: pid, dateCreated: new Date()};
    console.log('new collection:', newData); //log
    return this.http.post(urlPoint, newData);
  }

  addView(uid: string, pid: string, cuid: string) {
    const urlPoint = this.url.urlPersonal + "views.json";
    const newData = {uid: uid, pid: pid, cuid: cuid, dateCreated: new Date()};
    return this.http.post(urlPoint, newData);
  }

  addEfficiency(scid: string, pid: string) {
    const urlPoint = this.url.urlPersonal + "efficiency.json";
    const newData = {scid: scid, pid: pid};
    return this.http.post(urlPoint, newData);
  }

  fetchPostDetails(pid: string) {
    const urlPoint = this.url.urlPost + "post_details/"+pid+".json";
    return this.http
    .get<PostDetails>(urlPoint);
  }

  fetchUserPostDetails(uid: string) {
    const urlPoint = this.url.urlPost + 'post_details.json?orderBy="uid"&equalTo="'+uid+'"';
    return this.http
    .get(urlPoint);
  }

  fetchPostContent(pid: string) {
    const urlPoint = this.url.urlPost + 'post_content.json?orderBy="pid"&equalTo="'+pid+'"';
    return this.http
    .get(urlPoint);
  }

  fetchStickerContent(pid: string) {
    const urlPoint = this.url.urlPost + 'sticker_content.json?orderBy="pid"&equalTo="'+pid+'"';
    return this.http
    .get(urlPoint);
  }

  fetchStickerDetails(pid: string) {
    const urlPoint = this.url.urlPost + 'sticker_details.json?orderBy="pid"&equalTo="'+pid+'"';
    return this.http.get(urlPoint);
  }

  fetchSCL(key: string, id: string) {
    const urlPoint = this.url.urlPersonal + 'sticker_collection_list.json?orderBy="'+key+'"&equalTo="'+id+'"';
    return this.http.get(urlPoint);
  }

  fetchViews(key: string, id: string) {
    const urlPoint = this.url.urlPersonal + 'views.json?orderBy="'+key+'"&equalTo="'+id+'"';
    return this.http.get(urlPoint);
  }

  fetchEfficiency(key: string, id: string) {
    const urlPoint = this.url.urlPersonal + 'efficiency.json?orderBy="'+key+'"&equalTo="'+id+'"';
    return this.http.get(urlPoint);
  }

  exactStickerContent(scid: string) {
    const urlPoint = this.url.urlPost + 'sticker_content/'+scid+"/data.json";
    return this.http
    .get<any>(urlPoint);
  }

  fetchPidFromScid (scid: string) {
    const urlPoint = this.url.urlPost + 'sticker_content/'+scid+'/pid.json';
    return this.http
    .get<string>(urlPoint);
  }

}



