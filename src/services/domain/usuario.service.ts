import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { StorageService } from "../storage.service";
import { ImageUtilService } from "../image-util.service";
import { UsuarioDTO } from "../../models/usuario.dto";
import { Globals } from "../../globals.array";

@Injectable()
export class UsuarioService {
  perfis;
  email;
  constructor(
    public http: HttpClient,
    public storage: StorageService,
    public imageUtilService: ImageUtilService,
    public global: Globals,
    public storageService: StorageService) {
  }

  findById(id: string) {
    return this.http.get(`${API_CONFIG.baseUrl}/usuarios/${id}`);
  }

  findAll() {
    return this.http.get(`${API_CONFIG.baseUrl}/usuarios`);
  }

  findByEmail(email: string) {
    return this.http.get(`${API_CONFIG.baseUrl}/usuarios/email?value=${email}`);
  }

  insert(obj: UsuarioDTO) {
    return this.http.post(
      `${API_CONFIG.baseUrl}/usuarios`,
      obj,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }

  preencherMenuDeAcordoComUsuario() {
    if (this.storageService.getLocalUser()) {
      this.email = this.storageService.getLocalUser().email;
      this.findByEmail(this.email)
        .subscribe((response => {
          this.perfis = response['perfis'];
          this.storageService.setUserPerfil(this.perfis);
          this.perfis.forEach(perfil => {
            this.global.pages = [
                { title: 'Home', component: 'HomePage', icone: 'md-home' },
                { title: 'Perfil', component: 'ProfilePage', icone: 'ios-man-outline' },                
                { title: 'Relatórios', component: 'GraficosPage', icone: 'ios-stats' },
              ];
              if (perfil === 'ADMIN') {
                this.global.pages.push(
                  { title: 'Usuários', component: 'FuncionariosPage', icone: 'ios-people' },
                  { title: 'Tanques', component: 'TanquesPage', icone: 'people' },
                  { title: 'Adicionar Usuário', component: 'SignupPage', icone: 'md-person-add' },
                )
              }
              this.global.pages.push({ title: 'Logout', component: '', icone: 'md-swap' },)
          });

        }))

    } else {
      return null;
    }
  }
}
