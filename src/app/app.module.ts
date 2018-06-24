import { SalinidadeService } from './../services/domain/salinidade.service';
import { OxigenioDissolvidoService } from './../services/domain/oxigenioDissolvido.service';
import { NitratoService } from './../services/domain/nitrato.service';
import { AmoniaTotalService } from './../services/domain/amoniaTotal.service';
import { EstadoService } from './../services/domain/estado.service';
import { CidadeService } from './../services/domain/cidade.service';
import { Globals } from './../globals.array';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { AuthInterceptorProvider } from '../interceptors/auth-interceptor';
import { ErrorInterceptorProvider } from '../interceptors/error-interceptor';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';
import { UsuarioService } from '../services/domain/usuario.service';
import { ImageUtilService } from '../services/image-util.service';
import { HttpClientModule } from '@angular/common/http';
import { TemperaturaService } from '../services/domain/temperatura.service';
import { PhService } from '../services/domain/ph.service';
import { TransparenciaService } from '../services/domain/transparencia.service';
import { NitritoService } from '../services/domain/nitrito.service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler} ,
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    AuthService,
    StorageService,
    UsuarioService,
    ImageUtilService,
    Globals,
    CidadeService,
    EstadoService,
    TemperaturaService,
    PhService,
    AmoniaTotalService,
    NitratoService,
    NitritoService,
    OxigenioDissolvidoService,
    SalinidadeService,
    TransparenciaService
  ]
})
export class AppModule {}
