import { API_CONFIG } from './../../config/api.config';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class AmoniaTotalService{

  constructor(public http:HttpClient){

  }
  findAmonias():Observable<any>{
    return this.http.get(`${API_CONFIG.baseUrl}/amonias`)
  }
}
