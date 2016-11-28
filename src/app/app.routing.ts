/**
 * Created by Princejeet Singh San on 11/28/2016.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent} from "./login/login.component";
import { LoginGuard } from "./login/login-guard.service"
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
