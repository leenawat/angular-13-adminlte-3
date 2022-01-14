import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  currentUser: any
  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    authService.currentUser.subscribe(user => {
      console.log({ app: 'AuthGuard', user })
      this.currentUser = user
    })
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.currentUser) {
      // logged in so return true
      console.log({ route })
      console.log({ routeRoles: route.data['roles'], userRoles: this.currentUser.roles })
      if (!this.isAuthorized(route.data['roles'], this.currentUser.roles as string[])) {
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/permission-denied'], { queryParams: { returnUrl: state.url } });
        return false;
      }
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  isAuthorized(allowedRoles: string[], userRoles: string[]): boolean {
    console.log({ allowedRoles, userRoles })
    // check if the list of allowed roles is empty, if empty, authorize the user to access the page
    if (!allowedRoles || allowedRoles == null || allowedRoles.length === 0) {
      return true
    }

    // check if the user roles is in the list of allowed roles, return true if allowed and false if not allowed
    let found = false
    // let user_role = ["MEMBER"];
    for (let i = 0; i < allowedRoles.length; i++) {
      for (let j = 0; j < userRoles.length; j++) {
        if (allowedRoles[i] == userRoles[j]) {
          found = true
          break
        }
      }
    }
    console.log({ found });
    return found
  }
}
