import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { CreadenciaisDTO } from '../../models/credenciais.dto';
import { Globals } from '../../globals.array';
import { UsuarioService } from '../../services/domain/usuario.service';
import { StorageService } from '../../services/storage.service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email;
  perfis = [];
  creds : CreadenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public auth: AuthService,
    public global:Globals,
    public usuarioService:UsuarioService,
    public storageService:StorageService) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
    this.usuarioService.preencherMenuDeAcordoComUsuario();
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  ionViewWillLeave(){

  }


  ionViewDidEnter() {
    this.auth.refreshToken()
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('HomePage');
      },
      error => {});
  }

  login() {
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('HomePage');
      },
      error => {});
  }
  signup(){
    this.navCtrl.push('SignupPage')
  }

}
