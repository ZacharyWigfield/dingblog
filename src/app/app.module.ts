import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogWriteComponent } from './blog-write/blog-write.component';
import { BlogReadComponent } from './blog-read/blog-read.component';
import { LoginComponent } from './login/login.component';
import { SubmitBtnComponent } from './shared/submit-btn/submit-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogWriteComponent,
    BlogReadComponent,
    LoginComponent,
    SubmitBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
