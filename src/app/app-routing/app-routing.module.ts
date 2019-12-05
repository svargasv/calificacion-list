import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ComentarioDetailComponent} from '../comentario/comentario-detail/comentario-detail.component';
import {ComentarioListComponent} from '../comentario/comentario-list/comentario-list.component';
import {ComentarioCreateComponent} from '../comentario/comentario-create/comentario-create.component';
const routes: Routes = [

  {
    path: 'comentarios',
    children: [{
      path: 'list',
      component: ComentarioListComponent
    },
    {
      path: ':id',
      component: ComentarioDetailComponent,
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