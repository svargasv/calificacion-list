import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { CalificacionListComponent } from './comentario-list/calificacion-list.component';
import { CalificacionService } from './calificacion.service';
import { CalificacionDetailComponent } from './comentario-detail/calificacion-detail.component';
import { FormsModule } from '@angular/forms';
import { CalificacionCreateComponent } from './comentario-create/calificacion-create.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [CommonModule,FormsModule,AppRoutingModule,
  ReactiveFormsModule],
  declarations: [CalificacionListComponent,CalificacionDetailComponent,CalificacionCreateComponent],
  exports : [CalificacionListComponent,CalificacionCreateComponent],
  providers: [CalificacionService]
 
})
export class CalificacionModule { }