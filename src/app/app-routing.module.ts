import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: 'posts/:id',
    loadChildren: () => import('./post/post.module').then(m => m.PostModule)
  },
  {
    path: 'notFound',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'notFound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
