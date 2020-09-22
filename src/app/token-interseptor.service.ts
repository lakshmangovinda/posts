import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {AuthService} from './auth.service';
import {KeycloakService} from 'keycloak-angular';
import {map, mergeMap, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
// @ts-ignore
// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class TokenInterseptorService implements HttpInterceptor {
  tokens;

  constructor(private service: AuthService, public serv: KeycloakService) {
  }
  // @ts-ignore
  intercept(req: HttpRequest<any>, next: HttpHandler) {
  // @ts-ignore
    // @ts-ignore
    return this.serv.addTokenToHeader(req.headers).pipe(mergeMap( x => {
      console.log(x);
      const a = req.clone({headers: x});
      return next.handle(a); }
   ) );
}
}
