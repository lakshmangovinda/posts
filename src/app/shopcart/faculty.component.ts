import { Component, OnInit } from '@angular/core';
import {ShopcartService} from '../shopcart.service';
import {product} from '../util/product';
import {addThemeToAppStyles} from '@angular/material/schematics/ng-add/theming/theming';


@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
data: Array<product> = [];
Tp = [];
a = false;
  cleared: any;
  Tq: number;
  update = {};
constructor(public service: ShopcartService ) {
  }
  ngOnInit() {
    this.data = this.service.quantity();
    this.Tp = this.service.Tprices();
    this.a = this.service.avail();
    // @ts-ignore
    this.Tq = this.service.Tquantity();
}
clear(){
  this.data = [];
  this.Tp = [];
  this.a = false;
  this.cleared =   this.service.clear();
}
}
