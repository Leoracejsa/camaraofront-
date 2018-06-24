import { API_CONFIG } from './../config/api.config';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Rx'; // IMPORTANTE: IMPORT ATUALIZADO
import { StorageService } from '../services/storage.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public storageService: StorageService) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let localUser = this.storageService.getLocalUser();
    let quantidadeCaracteres = API_CONFIG.baseUrl.length;

    let requestToAPI = req.url.substring(0,quantidadeCaracteres) === API_CONFIG.baseUrl;

        if(localUser && requestToAPI){
          const authReq = req.clone({headers:req.headers.set('Authorization','Bearer ' + localUser.token)});
          return next.handle(authReq);
        }else{

          return next.handle(req);
        }

  }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};
