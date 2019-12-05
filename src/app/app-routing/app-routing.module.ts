import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {CalificacionDetailComponent} from '../comentario/comentario-detail/calificacion-detail.component';
import {CalificacionListComponent} from '../comentario/comentario-list/calificacion-list.component';
import {CalificacionCreateComponent} from '../comentario/comentario-create/calificacion-create.component';
const routes: Routes = [

  {
    path: 'calificaciones',
    children: [{
      path: 'list',
      component: CalificacionListComponent
    },
    {
      path: ':id',
      component: CalificacionDetailComponent,
      outlet: 'detail'
    }
    ]
  },
  {
    path:'create',
    component:ComentarioCreateComponent,
  }
  
  
];
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'})
    ],
   exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }