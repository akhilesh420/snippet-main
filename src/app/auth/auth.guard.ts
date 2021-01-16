import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AngularFireAuth, private router: Router) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
      let isAuthenticated: boolean;
     await this.auth.onAuthStateChanged((user) => {
        isAuthenticated = !!user;
        if (!isAuthenticated) this.router.navigate(['/auth']);
        console.log(isAuthenticated);
      });
      console.log(isAuthenticated);
      return isAuthenticated;
  }

}
