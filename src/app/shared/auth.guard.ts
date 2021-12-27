import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private afAuth: AngularFireAuth,
    public authService: AuthService
  ) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {

    // const user = this.authService.user;
    // let isAdmin: boolean = false;
    // console.log(user?.uid)
    // console.log(user?.email)
    // if (user?.email == 'zewigfield@gmail.com') {
    //   isAdmin = true;
    // }
    // console.log(isAdmin)
    // return isAdmin;

    const user = await this.afAuth.currentUser;
      const isLoggedIn = !!user;
      if (user?.email != 'zewigfield@gmail.com') {
        console.log('bad login')
      }
      return isLoggedIn;

      
  }

}
