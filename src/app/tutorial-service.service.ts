import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from './tutorial';

@Injectable({
  providedIn: 'root'
})
export class TutorialServiceService {

baseUrl = 'http://localhost:8080/api/tutorials';

  constructor(private http:HttpClient) { }

  getAll():Observable<Tutorial[]>{
    return this.http.get<Tutorial[]>(this.baseUrl);
  }

  get(id: any): Observable<Tutorial> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data:any):Observable<any>{
    return this.http.post(this.baseUrl,data);
  }

  update(id:any,data:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`,data);
  }

  delete(id:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll():Observable<any>{
    return this.http.delete(this.baseUrl);
  }

}//cierra servicio
