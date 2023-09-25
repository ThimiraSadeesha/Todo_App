import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


import { Observable, map, tap } from 'rxjs';

import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  constructor(private ApiService: ApiService,
    private route: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.ApiService.jwtUserToken.pipe(
      map((result) => !!result),
      tap(result => {
        if (!result) {
          this.route.navigateByUrl('/login').then();
          return result;
        }
        return result;
      })
    );
  }

}
