import { Component, OnInit } from '@angular/core';
import {ShopcartService} from '../shopcart.service';

@Component({
  selector: 'app-ordersuccess',
  templateUrl: './ordersuccess.component.html',
  styleUrls: ['./ordersuccess.component.css']
})
export class OrdersuccessComponent implements OnInit {

  constructor( public service: ShopcartService) { }
avail = false;
  ngOnInit(): void {
    this.avail = this.service.avail();
  }

}
