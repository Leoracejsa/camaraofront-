import { AuthService } from './../../services/auth.service';
import { StorageService } from './../../services/storage.service';
import { UsuarioService } from './../../services/domain/usuario.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { API_CONFIG } from '../../config/api.config';
import { LoginPage } from '../login/login';

/**
 * Generated class for the FuncionariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-funcionarios',
  templateUrl: 'funcionarios.html',
})
export class FuncionariosPage {
  funcionarios;
  emailUsuarioLogado;
  perfis = []
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public usuarioService: UsuarioService,
    public storageService: StorageService,
    public authService: AuthService,
    public loadingCtrl: LoadingController
  ) {

  }


  ionViewDidLoad() {
    let loading = this.presentLoadingDefault();
    this.emailUsuarioLogado = this.storageService.getLocalUser().email
    this.usuarioService.findAll().subscribe((response => {

      this.funcionarios = response;
      let position = this.funcionarios.findIndex(funcionario => funcionario.email === this.emailUsuarioLogado);
      if (position != -1) {
        this.funcionarios.splice(position, 1)
      }

      this.funcionarios.forEach(funcionario => {

      });
      loading.dismiss();


    }), error => {
      loading.dismiss()
    })
  }


  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Carregando...'
    });

    loading.present();
    return loading;
  }

}
