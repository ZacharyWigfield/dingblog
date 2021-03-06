import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
import { BlogReadComponent } from './blog-read/blog-read.component';
import { BlogWriteComponent } from './blog-write/blog-write.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: BlogReadComponent },
  { path: 'write', component: BlogWriteComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
