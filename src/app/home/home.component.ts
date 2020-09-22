import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {element} from 'protractor';
import {ShopcartService} from '../shopcart.service';
import {product} from '../util/product';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public service: DataService, public serve: ShopcartService, public serv: KeycloakService ) {
  }
  q2: [];
  data: any;
  fdata: any;
  c: [];
  unique: any;
  cat: any;
  quan = [];
  i = 0;
  t: any;
s: any;
admi;
startedClass = false;
completedClass = false;
ngOnInit() {
  this.admi = this.serv.getKeycloakInstance().realmAccess.roles;
  console.log(this.admi);
  this.service.getposts().subscribe(res => {
      this.fdata = this.data = res;
      this.s = this.t = this.fdata.map((e) => ({...e, q: 0 , btn1: true, btn2: false }));
      this.c = this.data.map((e) => e.category);
      this.cat = this.c.filter((c, index) =>  this.c.indexOf(c) === index);
});
}

  filter(v) {
    this.t = this.s.filter(p => p.category === v);
    console.log(this.s);
  }

  send(f) {
  this.serve.send(f);
}

  minus(f) {
  this.serve.minus(f);

}

    plus(f) {
     this.serve.plus(f);
}

}
