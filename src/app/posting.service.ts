import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostingService {
  constructor(public http: HttpClient){}



post(data: any){
  return  this.http.post('http://localhost:3888/post', data);
}
get(){
  return this.http.get('http://localhost:3888');
}
}
