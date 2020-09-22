import { Injectable } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  admi;
  list;
  nam;
  btoken;
  constructor(public service: KeycloakService) { }
  get data(){
    this.admi = this.service.getKeycloakInstance().realmAccess.roles;
    console.log(this.admi);
    this.list = this.admi[2];
    console.log(this.list);
    return this.list;
  }
  get admin(){
    this.nam = this.service.getKeycloakInstance().realmAccess.roles;
    this.list = this.nam[2];
    return this.list === 'Admin'; }
}
