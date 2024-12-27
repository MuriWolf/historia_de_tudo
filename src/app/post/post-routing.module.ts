import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { PostComponent } from './post.component';

const routes: Routes = [
  {
    path: '',
    component: PostComponent
  }
];

@NgModule({
  imports: [
    MarkdownModule.forChild(),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PostRoutingModule { }
