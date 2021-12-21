import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogReadComponent } from './blog-read/blog-read.component';
import { BlogWriteComponent } from './blog-write/blog-write.component';

const routes: Routes = [
  { path: '', component: BlogReadComponent },
  { path: 'write', component: BlogWriteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
