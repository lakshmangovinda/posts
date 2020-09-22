import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Subscription} from 'rxjs';
// import {MatCardModule} from '@angular/material/card';
// import {Apperr} from '../Apperr';
// import {Badinput} from '../Badinput';
// import {Notfound} from '../Notfound';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements  OnInit{

  constructor(public service: DataService){}
  datas: any;
fdata: any;
  sub: Subscription;
  //
  // posted(data){
  //   console.log(data.value);
  //   let post: any = {name: data.value};
  //   console.log(post);
  //   this.service.pos(post).subscribe(response => {
  //     console.log(response);
  //     post = response;
  //     this.datas.push(post);
  //   });
  // }
 // images = [
 //    { id: 1 , img: '../../assets/images/1.png'},
 //    { id: 2 , img: '../../assets/images/2.png'},
 //    { id: 3 , img: '../../assets/images/3.png'},
 //    { id: 4 , img: '../../assets/images/4.png'},
 //    { id: 5 , img: '../../assets/images/5.png'},
 //    { id: 6 , img: '../../assets/images/6.png'},
 //    { id: 7 , img: '../../assets/images/7.png'},
 //    { id: 8 , img: '../../assets/images/8.png'},
 //    { id: 9 , img: '../../assets/images/9.png'},
 //    { id: 10 , img: '../../assets/images/10.png'},
 //  ];
 //  // tslint:disable-next-line:no-debugger
  ngOnInit(){
    this.service.getposts()
      .subscribe(res =>
      {
      console.log(res);
      this.fdata =  this.datas = res;
      console.log(this.datas); });
      // , (err: Apperr) => {
      //   if (err instanceof Notfound){
      //     console.log('not found');
      //   }
      //   else {
      //     throw err;
      //   }
      // }
//       );
//   }
 }

filter(value){
    console.log(value);
    if (value){
      this.datas = this.fdata.filter(p => p.title === value);
    }
    else{
      this.datas = this.fdata;
    }
  }
    del(i, tit){
    // const t = {id: i};
    console.log(i);
    this.service.dels(i).subscribe(res => console.log('response' + JSON.stringify(res)));
      }
    }

