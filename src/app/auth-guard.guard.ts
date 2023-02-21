import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private nativeStorage: NativeStorage,
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Promise<boolean> {
        return new Promise((resolve) => {
            this.nativeStorage.getItem('facebook_user')
                .then(data => {
                    resolve(true);
                }, err => {
                    this.router.navigate(['/login']);
                    resolve(false);
                })
        })
    }
}
