
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule, MapsAPILoader, AgmMarker, MarkerManager } from '@agm/core';

// Pages and auth
import { HomePageComponent } from './pages/home-page-component/home-page-component.component';
import { AuthLoginPageComponent } from './pages/auth-login-page-component/auth-login-page-component.component';
import { AuthSignupPageComponent } from './pages/auth-signup-page-component/auth-signup-page-component.component';
import { CompanyPageComponent } from './pages/company-page/company-page.component';
import { AddFactoryPageComponent } from './pages/add-factory-page/add-factory-page/add-factory-page.component';

import { AuthService } from './services/auth.service';
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { PrivateComponent } from './pages/private/private.component';

// Services
import { FactoryApiService } from './services/factory-api.service';
import { BuyerCountriesApiService } from './services/buyer-countries-api/buyer-countries-api.service';

// Components
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { AddFactoryFormComponent } from './components/add-factory-form/add-factory-form.component';
import { ListFactoriesComponent } from './components/list-factories/list-factories.component';
import { EditFactoryFormComponent } from './components/edit-factory-form/edit-factory-form.component';
import { FactoryCardComponent } from './components/factory-card/factory-card.component';
import { CountryExportsComponent } from './components/country-exports/country-exports.component';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import { WordLengthPipe } from './pipes/word-length.pipe';
import { MapsComponent } from './components/maps/maps.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
    component: AuthSignupPageComponent,
    canActivate: [RequireAnonGuardService]
  },
  {
    path: 'private-profile',
    component: PrivateComponent,
    canActivate: [RequireUserGuardService]
  },
  {
    path: 'company/:id',
    component: CompanyPageComponent,
    canActivate: [RequireUserGuardService]
  },
  {
    path: 'add-factory',
    component: AddFactoryPageComponent,
    canActivate: [RequireUserGuardService]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AuthLoginPageComponent,
    AuthSignupPageComponent,
    PrivateComponent,
    AddFactoryFormComponent,
    NewsComponent,
    ListFactoriesComponent,
    EditFactoryFormComponent,
    FactoryCardComponent,
    CompanyPageComponent,
    CountryExportsComponent,
    ShortNumberPipe,
    MapsComponent,
    AddFactoryPageComponent,
    WordLengthPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDgXhtB3roWHVQ3xN-R9ppbWCprBKa0fEs',
      libraries: ['places']
    })
  ],
  providers: [
    AuthService,
    RequireUserGuardService,
    RequireAnonGuardService,
    InitAuthGuardService,
    FactoryApiService,
    BuyerCountriesApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
