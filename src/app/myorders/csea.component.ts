import { Component, OnInit } from '@angular/core';
import {ShopcartService} from '../shopcart.service';
import {DataService} from '../data.service';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-csea',
  templateUrl: './csea.component.html',
  styleUrls: ['./csea.component.css']
})
export class CseaComponent implements OnInit {
cart1;
user;
data;
avail = false;
array;
  Tp;
  T;
 cart2;
  email;
  c;
  constructor(private  service: ShopcartService, private  s: DataService, private serve: KeycloakService) { }

  ngOnInit(){
    this.email = this.serve.getKeycloakInstance().profile.email;
    this.avail = this.service.avail();
    this.T = this.data.map(e => e.totalprice);
    this.Tp = this.T[0];
    this.s.getuser().subscribe(res => {
      this.data = res;
      this.cart1 = this.data.map(element => {
        return  JSON.parse(element.usercart);
      });
      this.c = this.cart1.map(element => {
        return (element);
      });
      this.cart2 = this.c[0];
      console.log(this.cart2);
      });
  }

}
