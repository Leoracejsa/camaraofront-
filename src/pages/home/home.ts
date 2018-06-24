import { Globals } from './../../globals.array';
import { TransparenciaService } from './../../services/domain/transparencia.service';
import { SalinidadeService } from './../../services/domain/salinidade.service';
import { OxigenioDissolvidoService } from './../../services/domain/oxigenioDissolvido.service';
import { NitritoService } from './../../services/domain/nitrito.service';
import { NitratoService } from './../../services/domain/nitrato.service';
import { AmoniaTotalService } from './../../services/domain/amoniaTotal.service';

import { StorageService } from './../../services/storage.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UsuarioService } from '../../services/domain/usuario.service';
import { TemperaturaService } from '../../services/domain/temperatura.service';
import { PhService } from '../../services/domain/ph.service';
import { API_CONFIG } from '../../config/api.config';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  title: any;
  email;
  usuario;
  perfis = [];
  temperatura: any;
  ph;
  amoniaTotal;
  nitrato;
  nitrito;
  oxigenioDissolvido;
  salinidade;
  transparencia;
  loopRecursivas: boolean;
  tempo: number = 2000;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public storageService: StorageService,
    public usuarioService: UsuarioService,
    public temperaturaService: TemperaturaService,
    public phService: PhService,
    public amoniaTotalService: AmoniaTotalService,
    public nitratoService: NitratoService,
    public nitritoService: NitritoService,
    public oxigenioDissolvidoService: OxigenioDissolvidoService,
    public salinidadeService: SalinidadeService,
    public transparenciaService: TransparenciaService,
    public global: Globals
  ) {
    console.log(this.title = this.navParams.get('title'))
    this.loopRecursivas = true;
    this.exibirTemperaturaEmCincoSegundos();
    this.exibirPhEmCincoSegundos();
    this.exibirNitratoEmCincoSegundos();
    this.exibirNitritoEmCincoSegundos();
    this.exibirOxigenioDissolvidoEmCincoSegundos();
    this.exibirSalinidadeEmCincoSegundos();
    this.exibirTransparenciaEmCincoSegundos();
    this.exibirAmoniaTotalEmCincoSegundos();
  }

  ionViewDidLoad() {
    this.presentLoadingDefault();
    this.usuarioService.preencherMenuDeAcordoComUsuario();
  }

  ionViewDidEnter() {

  }

  ionViewWillLeave() {
    this.loopRecursivas = false;

  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Carregando...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, this.tempo);
  }



  exibirTemperaturaEmCincoSegundos() {
    setTimeout(() => {
      if (this.loopRecursivas) {
        this.temperaturaService.findTemperatura().subscribe(response => {
          this.temperatura = response;
          this.exibirTemperaturaEmCincoSegundos();
        })
      }
    }, this.tempo);
  }

  exibirPhEmCincoSegundos() {
    setTimeout(() => {
      if (this.loopRecursivas) {
      this.phService.findPhs().subscribe(response => {
          this.ph = response;
          this.exibirPhEmCincoSegundos();
        })
      }
    }, this.tempo);
  }
  exibirNitratoEmCincoSegundos() {
    setTimeout(() => {
      if (this.loopRecursivas) {
      this.nitratoService.findNitratos().subscribe(response => {
          this.nitrato = response;
          this.exibirNitratoEmCincoSegundos();
        })
      }
    }, this.tempo);
  }
  exibirNitritoEmCincoSegundos() {
    setTimeout(() => {
      if (this.loopRecursivas) {
      this.nitritoService.findNitrito().subscribe(response => {
          this.nitrito = response;
          this.exibirNitritoEmCincoSegundos();
        })
      }
    }, this.tempo);

  }

  exibirOxigenioDissolvidoEmCincoSegundos() {
    setTimeout(() => {
      if (this.loopRecursivas) {
      this.oxigenioDissolvidoService.findOxigenioDissolvido().subscribe(response => {
          this.oxigenioDissolvido = response;
          this.exibirOxigenioDissolvidoEmCincoSegundos();
        })
      }
    }, this.tempo);

  }

  exibirSalinidadeEmCincoSegundos() {
    setTimeout(() => {
      if (this.loopRecursivas) {
      this.salinidadeService.findSalinidade().subscribe(response => {
          this.salinidade = response;
          this.exibirSalinidadeEmCincoSegundos();
      })
    }
    }, this.tempo);

  }

  exibirTransparenciaEmCincoSegundos() {
    setTimeout(() => {
      if (this.loopRecursivas) {
      this.transparenciaService.findTransparencia().subscribe(response => {
          this.transparencia = response;
          this.exibirTransparenciaEmCincoSegundos();
      })
    }
    }, this.tempo);

  }

  exibirAmoniaTotalEmCincoSegundos() {
    setTimeout(() => {
      if (this.loopRecursivas) {
        this.amoniaTotalService.findAmonias().subscribe(response => {
          this.amoniaTotal = response;
          this.exibirAmoniaTotalEmCincoSegundos();

        })
      }
    }, this.tempo);

  }



}
