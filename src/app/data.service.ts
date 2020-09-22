import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
// import {Apperr} from './Apperr';
// import {Badinput} from './Badinput';
// import {Notfound} from './Notfound';
import { throwError } from 'rxjs';
import {AuthService} from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  btoken;
  token;
  constructor( public http: HttpClient, private service: AuthService) {
  }
  private static extractData(res) {
    return res;
  }
  getposts(){
    return this.http.get(`http://localhost:3888/shop`);
    // .pipe(map(res => DataService.extractData(res)));
      // catchError(this.hadle));
  }
pos(data){
    return  this.http.post('http://localhost:3888/shop', data);
}
//   public hadle(err){
//     if (err.status === 400){
//       return throwError(new Badinput(err));
//     }
//     else  if (err.status === 404) {
//       return throwError(new Notfound());
//     }
//     return throwError(new Apperr(err));
//   }
dels(title) {
    const t = title;
    console.log(t);
    return this.http.delete(`http://localhost:3888/shop/${t}`);
}
postuser(data){
    console.log(data);
    return this.http.post('http://localhost:3888/shopuser', data)  ;
}
getuser(){
    return this.http.get('http://localhost:3888/shopuser');
}
getall(){
  return this.http.get('http://localhost:3888/manage');
}

}

