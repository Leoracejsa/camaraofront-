import { UsuarioService } from './../services/domain/usuario.service';
import { Globals } from './../globals.array';
import { AuthService } from './../services/auth.service';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { StorageService } from '../services/storage.service';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  email;
  perfis = []
  @ViewChild(Nav) nav: Nav;

  rootPage = LoginPage;
  constructor(
              public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public authService:AuthService,
              public globals:Globals
              ) {

    this.initializeApp();

    // used for an example of ngFor and navigation

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }



  openPage(page:{title:string,component:string,icone:string}) {
    switch(page.title){
      case'Logout':

      this.authService.logout();

      this.nav.setRoot(LoginPage);
      break;
      default:
      this.nav.setRoot(page.component);

    }
  }
}
