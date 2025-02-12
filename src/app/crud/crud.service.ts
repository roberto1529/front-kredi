import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }
  enpPoint: string = "http://localhost:5101/api/Credito"

  public Listar(){
    return this.http.get('http://localhost:5101/api/Credito');
  }
}
