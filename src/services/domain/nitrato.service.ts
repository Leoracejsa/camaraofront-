import { API_CONFIG } from './../../config/api.config';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class NitratoService{

  constructor(public http:HttpClient){

  }
  findNitratos():Observable<any>{
    return this.http.get(`${API_CONFIG.baseUrl}/nitratos`)
  }
}
