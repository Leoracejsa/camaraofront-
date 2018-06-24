import { API_CONFIG } from './../../config/api.config';
import { EstadoDTO } from './../../models/estado.dto';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class EstadoService{

  constructor(public http:HttpClient){

  }
  findAll():Observable<EstadoDTO[]>{
    return this.http.get<EstadoDTO[]>(`${API_CONFIG.baseUrl}/estados`)
  }
}
