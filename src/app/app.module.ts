
/// <reference path='../../node_modules/bingmaps/scripts/MicrosoftMaps/Microsoft.Maps.All.d.ts'/>

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { MapModule, MapAPILoader, BingMapAPILoaderConfig, BingMapAPILoader, WindowRef,
//   DocumentRef, MapServiceFactory, BingMapServiceFactory } from 'angular-maps';

import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page-component/home-page-component.component';
import { AuthLoginPageComponent } from './pages/auth-login-page-component/auth-login-page-component.component';
import { AuthSignupPageComponent } from './pages/auth-signup-page-component/auth-signup-page-component.component';
import { AuthService } from './services/auth.service';
import { FactoryApiService } from './services/factory-api.service';
import {AddFactoryFormComponent} from './components/add-factory-form/add-factory-form.component';

// import { MapServiceProviderFactory } from '../app/services/map.service';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { PrivateComponent } from './pages/private/private.component';
import { MapComponent } from './components/map/map.component';

// const routes: Routes = [
//   { path: '',  component: HomePageComponent, canActivate: [ InitAuthGuardService ] },
//   { path: 'login',  component: AuthLoginPageComponent, canActivate: [ RequireAnonGuardService ] },
//   { path: 'signup',  component: AuthSignupPageComponent, canActivate: [ RequireAnonGuardService ] },
//   // { path: 'page',  component: ... , canActivate: [ RequireUserGuardService ] },
//   { path: '**', redirectTo: '' }
// ];

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivate: [InitAuthGuardService]
  },
  {
    path: 'login',
    component: AuthLoginPageComponent,
    canActivate: [RequireAnonGuardService]
  },
  {
    path: 'signup',
    component: AuthLoginPageComponent,
    canActivate: [RequireAnonGuardService]
  },
  { path: 'page',  component: PrivateComponent , canActivate: [ RequireUserGuardService ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AuthLoginPageComponent,
    AuthSignupPageComponent,
    PrivateComponent,
    MapComponent,
    AddFactoryFormComponent,
  ],
  imports: [
    // MapModule.forRoot(),
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    AuthService,
    RequireUserGuardService,
    RequireAnonGuardService,
    InitAuthGuardService,
    FactoryApiService,
  //   {
  //     provide: MapAPILoader, deps: [], useFactory: MapServiceProviderFactory
  // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

