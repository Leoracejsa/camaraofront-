import { API_CONFIG } from './../../config/api.config';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class PhService{

  constructor(public http:HttpClient){

  }
  findPhs():Observable<any>{
    return this.http.get(`${API_CONFIG.baseUrl}/phs`)
  }
}
