import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Calificacion } from './calificacion';
import {CalificacionDetail} from './calificacion-detail';
import { Observable } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";

const API_URL = "http://localhost:8080/s3_cortos-api/api/calificaciones";
const calificaciones ='calificaciones.json' ;
@Injectable()
export class CalificacionService {

private comentariosUrl = "http://localhost:8080/s3_cortos-api/api/comentario";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })};



  constructor(private http:HttpClient) {}


    getCalificaciones() : Observable<Calificacion[]> {
        return this.http.get<Calificacion[]>(API_URL);
   }

   getCalificacionDetail(calificacionId):Observable<CalificacionDetail>{
      console.log(calificacionId+" "+API_URL + "comentario-" + calificacionId+".json");
        return this.http.get<CalificacionDetail>(API_URL+"/"+calificacionId);
   }

   createCalificacion(comment :Calificacion):Observable<Calificacion>{
      return this.http.post<Calificacion>(this.comentariosUrl, comment, this.httpOptions).pipe(tap((comment: Calificacion) => console.log(`added calificacion w/ ${comment.id} id=${comment.puntaje}`)));
   }

   

}