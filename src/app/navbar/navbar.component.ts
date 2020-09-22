import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {KeycloakService} from 'keycloak-angular';
import {AuthService} from '../auth.service';
import {ShopcartService} from '../shopcart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public service: KeycloakService, public s: AuthService, public  serve: ShopcartService) {
    this.serve.shopcart.subscribe(x => {
      this.count = x.length;
    });
  }
  count: number;
  navbarOpen = false;
  name;
  list;

admi = this.s.admin;
  ngOnInit(){
    this.name =  this.service.getUsername();

  }
  navtoggle(){
this.navbarOpen = !this.navbarOpen;

setTimeout(() => {
  this.navbarOpen = !this.navbarOpen;
  } , 2000);
  }
  logout(){
   this.service.logout();
  }
}
