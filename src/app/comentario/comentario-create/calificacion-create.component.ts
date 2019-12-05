import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {CalificacionService} from '../calificacion.service';
import {Calificacion} from '../calificacion';
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-calificacion-create',
  templateUrl: './calificacion-create.component.html',
  styleUrls: ['./calificacion-create.component.css']
})
export class CalificacionCreateComponent implements OnInit {

  calificaciones:Calificacion[];
  calificacionForm:FormGroup;
  constructor(  private calificacionService:CalificacionService, private formBuilder :FormBuilder, private router: Router,private toastr: ToastrService) { 
    
    this.calificacionForm= this.formBuilder.group({
      id:["",Validators.required],
      puntaje:["",Validators.required]
    });
  }

 

  createCalificacion(newCalificacion: Calificacion)
  {
   
    this.calificacionService.createCalificacion(newCalificacion).subscribe(comment =>{this.calificaciones.push(comment);});
    console.warn("Su calificacion ha sido creado",newCalificacion);
    this.calificacionForm.reset();
    this.showSuccess();
  }
   showSuccess() {
    this.toastr.success("Calificacion", "Creado exitosamente!", {"progressBar": true,timeOut:3000});
  }
  ngOnInit() {}
}