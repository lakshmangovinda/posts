import {Injectable, OnInit} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {product} from './util/product';
@Injectable({
  providedIn: 'root'
})
export class ShopcartService {
 public shopcart = new Subject<Array<product>>();
 Tprice = [];
  data: Array<product> = [];
  c: number;
  quat = [];
  quat2 = [];
  Tq: number;
  private objIndex: number;
  constructor() {
  }

avail(){
 return  typeof this.quat !== 'undefined' && this.quat.length > 0;
}
  get datas() {
    return this.data;
  }

  pushdata(v) {
    if (!this.check(v.title)) {
      this.data.push(v);
      this.shopcart.next(this.data);
      return v.q;
  }
    else{
      const foundIndex = this.data.findIndex(x => x.id === v.id);
      this.data[foundIndex].q = this.data[foundIndex].q + 1;
      console.log(this.data[foundIndex].q);
      v.q = this.data[foundIndex].q;
      this.shopcart.next(this.data);
      return v.q;
    }

  }

  check(title: string) {

    return this.data ? this.data.some(x => x.title === title) : false;

  }

  delete(v) {
    this.data.splice(this.data.findIndex(item => item.id === v.id), 1);
    this.shopcart.next(this.data);
  }

  quantity() {
  this.quat2 =  this.quat = this.data.filter((c, index) => {
      return this.data.indexOf(c) === index;
    });
  return this.quat;
  }

  Tprices() {
this.Tprice = this.quat.reduce(( a, b ) => a + b.q * b.price, 0);
return this.Tprice;
  }

  send(f) {
    if (!this.check(f.title)) {
    f.q = 1;
    this.pushdata(f);
    return [f.btn1 = false, f.btn2 = true]; }
    else {
      const foundIndex = this.data.findIndex(x => x.id === f.id);
      f.q = this.data[foundIndex].q;
      if (f.q < f.quantity) {
        f.q =  this.data[foundIndex].q + 1;
        this.pushdata(f);
      }else{
        f.q = this.data[foundIndex].q;
      }
      return [ f.btn1 = false, f.btn2 = true];
    }
  }
  plus(f) {
    if (f.q < f.quantity) {
      return  [this.pushdata(f)];
    }
    else
    {
      alert('out of quantity');
    }
  }

  minus(f) {
    if (!this.check(f.title)) {
      alert('nothing in cart to remove');
    } else {
      if (f.q > 1) {
        f.q = f.q - 1;
        this.shopcart.next(this.data);
      } else {
        this.delete(f);
        this.shopcart.next(this.data);
        f.btn1 = true;
        f.btn2 = false;
        alert('item removed');
      }
    }
    return [f.btn1, f.btn2, f.q];
  }
  clear(){
    while (this.data.length >= 1) {
      this.data = [];
    }
    this.shopcart.next(this.data);
    return this.data;
    while (this.Tprice.length >= 1) {
      this.Tprice = [];
    }
    this.shopcart.next(this.data);
    return this.Tprice;
  }
  Tquantity(){
   this.Tq = this.quat.reduce((a, b) => a + b.q, 0);
   return this.Tq;
  }
}
