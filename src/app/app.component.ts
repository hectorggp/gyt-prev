import { Component, ViewChild } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  @ViewChild('menu') menu: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nativeStorage: NativeStorage,
    private router: Router,
    private navController: NavController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //Here we will check if the user is already logged in
      //because we don't want to ask users to log in each time they open the app
      this.nativeStorage.getItem('facebook_user')
        .then(data => {
          //user is previously logged and we have his data
          //we will let him access the app
          this.router.navigate(["/user"]);
          this.splashScreen.hide();
        }, err => {
          this.router.navigate(["/login"]);
          this.splashScreen.hide();
        })
      this.statusBar.styleDefault();
    });
  }

  navegar(ruta: string) {
    this.navController.navigateForward(ruta);
    this.menu.close()
  }
}
