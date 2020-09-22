import { Component, OnInit } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit  {

  constructor(public service: KeycloakService) { }
name;
  email;
  id;
  ngOnInit(): void {
    this.name = this.service.getUsername();
    this.email = this.service.getKeycloakInstance().profile.email;
    this.id =  this.service.getKeycloakInstance().realm;
    console.log(this.id);
  } }
