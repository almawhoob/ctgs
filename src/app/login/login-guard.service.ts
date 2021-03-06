/**
 * Created by Princejeet Singh San on 11/28/2016.
 */
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import {Observable} from 'rxjs/Observable';

import {Injectable} from "@angular/core";
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {AngularFire} from "angularfire2";

@Injectable()
export class LoginGuard implements CanActivate{

  constructor(private af:AngularFire, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
    // this.af.auth.subscribe(auth => console.log(auth));
    return this.af.auth.map((auth) =>
    {
      console.log(auth)
      if (auth == null){
        console.log("Log in to access");
        this.router.navigate(['/login']);
        return false;
      }else
        return true;
    }).first();
  }
}
