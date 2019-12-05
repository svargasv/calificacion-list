import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ComentarioService} from '../comentario.service';
import{ComentarioDetail} from '../comentario-detail';
import{Comentario} from '../comentario';
@Component({
  selector: 'app-comentario-detail',
  templateUrl: './comentario-detail.component.html',
})
export class ComentarioDetailComponent implements OnInit {

  constructor(
    private comentarioService:ComentarioService,
    private route: ActivatedRoute
  ) { }


  @Input() comentarioDetail:ComentarioDetail;

  comentario_id:number;

  getComentarioDetail():void{
    this.comentarioService.getComentarioDetail(this.comentario_id).subscribe(comentarioDetail=>{this.comentarioDetail=comentarioDetail});
  }

  ngOnInit() {
    this.comentario_id= +this.route.snapshot.paramMap.get('id');
    if(this.comentario_id){
      this.comentarioDetail= new ComentarioDetail();
      this.getComentarioDetail();
    }
  }

}