import { Component, OnInit, ViewChild } from '@angular/core';
import {Comentario} from "../comentario";
import {Router} from "@angular/router";
import {ComentarioService} from "../comentario.service";
import {ComentarioDetailComponent} from   "../comentario-detail/comentario-detail.component";
import {ComentarioDetail} from  "../comentario-detail";


@Component({
  selector: 'app-comentario-list',
  templateUrl: './comentario-list.component.html',
  //styleUrls: ['./comentario-list.component.css']
})
export class ComentarioListComponent implements OnInit{

  constructor(private comentarioService:ComentarioService, private router: Router) { }
    comentarios:Comentario[];
  getComentarios():void{
    this.comentarioService.getComentarios().subscribe(comentarios=>this.comentarios=comentarios);
  }
  comentario_id:number;
  selectedComentario:ComentarioDetail;

  onSelected(comentario_id:number):void{
    this.comentario_id=comentario_id;
    this.selectedComentario=new ComentarioDetail();
    this.comentarioService.getComentarioDetail(comentario_id).subscribe(o => this.selectedComentario =o);
  }
  ngOnInit() {
        this.getComentarios();
    }
  }



