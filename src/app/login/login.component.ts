import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {UsernameValidators} from '../username.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.minLength(5)
    , UsernameValidators.nospace, UsernameValidators.email]),
  password: new FormControl('', Validators.required)
});
  email: ' /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';

  constructor(public route: Router) { }
  login(){
    console.log(this.form.value.name);
    this.route.navigate(['']);
  }
get username(){
 return    this.form.get('name');
}
  get password(){
    return    this.form.get('password');
  }
}
