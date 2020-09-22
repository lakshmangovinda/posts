import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import { DataComponent } from './manageproducts/data.component';
import {DataService} from './data.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { CseaComponent } from './myorders/csea.component';
import { CsebComponent } from './manageorders/cseb.component';
import { FacultyComponent } from './shopcart/faculty.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './checkout/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {initializer} from './intilize';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';

import { NotadminComponent } from './notadmin/notadmin.component';
import {AuthguardService} from './authguard.service';
import {AuthService} from './auth.service';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import { ProductsComponent } from './products/products.component';
import {ProductformComponent} from './productform/productform.component';
import { CustomFormsModule } from 'ngx-custom-validators';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatListModule} from '@angular/material/list';
import {ShopcartService} from './shopcart.service';
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';
import {TokenInterseptorService} from './token-interseptor.service';

// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

// for Router import:
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

// for Core import:
import { LoadingBarModule } from '@ngx-loading-bar/core';


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    NavbarComponent,
    CseaComponent,
    CsebComponent,
    FacultyComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    NotadminComponent,
    OrdersuccessComponent,
    ProductsComponent,
    ProductformComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        CustomFormsModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'myorders', component: CseaComponent},
            {path: 'manageorders', component: CsebComponent, canActivate: [AuthguardService]},
            {path: 'manageproducts', component: DataComponent, canActivate: [AuthguardService]},
            {path: 'shopcart', component: FacultyComponent},
            {path: 'contacts', component: ContactComponent},
            {path: 'login', component: LoginComponent},
            {path: 'checkout', component: RegisterComponent},
            {path: 'profile', component: UserProfileComponent},
            {path: 'noaccess', component: NotadminComponent},
            {path: 'ordersucess', component: OrdersuccessComponent},
            {path: 'newproducts', component: ProductformComponent, canActivate: [AuthguardService]},
        ]),
        // tslint:disable-next-line:max-line-length
        ReactiveFormsModule, FormsModule, NgbDropdownModule, KeycloakAngularModule, MatTableModule, MatInputModule, MatSortModule, MatListModule, MatBadgeModule, MatExpansionModule
      ,
      LoadingBarHttpClientModule,

      // for Router use:
      LoadingBarRouterModule,

      // for Core use:
      LoadingBarModule ],
  providers: [DataService,  {
    provide: APP_INITIALIZER,
    useFactory: initializer,
    deps: [ KeycloakService ],
    multi: true
  }
  , AuthguardService, AuthService, ShopcartService, {provide: HTTP_INTERCEPTORS, useClass: TokenInterseptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
