import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { Blog } from './blog/blog.component';
import { BloglistComponent } from './blog/bloglist/bloglist.component';


@NgModule({
  declarations: [
    AppComponent,
    Blog,
    BloglistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
