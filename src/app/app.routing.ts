/**
 * Created by Princejeet Singh San on 11/28/2016.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent} from "./login/login.component";
import { LoginGuard } from "./login/login-guard.service"
import {HomeComponent} from "./home/home.component";
import {RecommendationComponent} from "./recommendation/recommendation.component";
import {ApplicationCreateComponent} from "./application-create/application-create.component";
import {Address} from "cluster";
import {AddUserComponent} from "./add-user/add-user.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [LoginGuard]},
  {path: 'home', component: HomeComponent, canActivate: [LoginGuard]},
  {path: 'login', component: LoginComponent },
  {path: 'apply', component: ApplicationCreateComponent, canActivate: [LoginGuard]},
  {path: 'rec', component: RecommendationComponent, canActivate: [LoginGuard]},
  {path: 'add', component: AddUserComponent, canActivate: [LoginGuard]}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
