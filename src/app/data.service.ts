import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  // @ts-ignore
  constructor(public http: HttpClient) {
  }
// tslint:disable-next-line:ban-types
 url = 'http://localhost:3888/stu';
  // tslint:disable-next-line:contextual-lifecycle
  getposts(){
    return this.http.get(this.url);
}
pos(data){
    return  this.http.post(this.url, data.value);
}
}
