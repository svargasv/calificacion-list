import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{CalificacionService} from '../calificacion.service';
import{CalificacionDetail} from '../calificacion-detail';
import{Calificacion} from '../calificacion';
@Component({
  selector: 'app-calificacion-detail',
  templateUrl: './calificacion-detail.component.html',
})
export class CalificacionDetailComponent implements OnInit {

  constructor(
    private calificacionService:CalificacionService,
    private route: ActivatedRoute
  ) { }


  @Input() calificacionDetail:CalificacionDetail;

  calificacion_id:number;

  getCalificacionDetail():void{
    this.calificacionService.getCalificacionDetail(this.calificacion_id).subscribe(calificacionDetail=>{this.calificacionDetail=calificacionDetail});
  }

  ngOnInit() {
    this.calificacion_id= +this.route.snapshot.paramMap.get('id');
    if(this.calificacion_id){
      this.calificacionDetail= new CalificacionDetail();
      this.getCalificacionDetail();
    }
  }

}