import { Component, OnInit, ViewChild } from '@angular/core';
import {Calificacion} from "../calificacion";
import {Router} from "@angular/router";
import {CalificacionService} from "../calificacion.service";
import {CalificacionDetailComponent} from   "../comentario-detail/calificacion-detail.component";
import {CalificacionDetail} from  "../calificacion-detail";


@Component({
  selector: 'app-calificacion-list',
  templateUrl: './calificacion-list.component.html',
  //styleUrls: ['./comentario-list.component.css']
})
export class CalificacionListComponent implements OnInit{

  constructor(private calificacionService:CalificacionService, private router: Router) { }
    calificaciones:Calificacion[];
  getCalificaciones():void{
    this.calificacionService.getCalificaciones().subscribe(calificaciones=>this.calificaciones=calificaciones);
  }
  calificaciones_id:number;
  selectedCalificaciones:CalificacionDetail;

  onSelected(calificacion_id:number):void{
    this.calificaciones_id=calificacion_id;
    this.selectedCalificaciones=new CalificacionDetail();
    this.calificacionService.getComentarioDetail(calificacion_id).subscribe(o => this.selectedCalificaciones =o);
  }
  ngOnInit() {
        this.getCalificaciones();
    }
  }



