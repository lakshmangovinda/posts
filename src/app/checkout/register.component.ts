import { Component, OnInit } from '@angular/core';
import {ShopcartService} from '../shopcart.service';
import {DataService} from '../data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(public service: ShopcartService, public serve: DataService) { }
data = [];
  Tprice = [] ;
  avail = false;
  userdata;
  finaldata;
  ngOnInit() {
 this.data = this.service.quantity();
 this.Tprice = this.service.Tprices();
 this.avail = this.service.avail();
  }
postuser(d){
  this.userdata = d.address;
  console.log(this.userdata);
  this.finaldata = {usercart: this.data, user: this.userdata , Totalprice: this.Tprice};
  this.serve.postuser(this.finaldata).subscribe( res => {console.log(res); } ) ;
}

}
