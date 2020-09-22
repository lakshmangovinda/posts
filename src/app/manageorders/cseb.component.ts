import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ShopcartService} from '../shopcart.service';

@Component({
  selector: 'app-cseb',
  templateUrl: './cseb.component.html',
  styleUrls: ['./cseb.component.css']
})
export class CsebComponent implements OnInit {
data;
user;
T;
Tp;
cart1;
  cart2;
  c;
  c1;
  u = [];
  u1;
  constructor(private  s: DataService, private service: ShopcartService) { }

  ngOnInit() {
 this.data = this.s.getall().subscribe(res => {
   this.data = res;
   console.log(this.data);
   this.c = this.data.map(x => x.usercart);
   this.cart1 = this.c.map(x => JSON.parse(x) );
   console.log(this.cart1);
   this.cart2 = this.cart1.find(x => x);
   console.log(this.cart2);
 });
  }
}

