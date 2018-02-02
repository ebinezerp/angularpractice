import { Component } from '@angular/core';
import { Blog } from './blog/blog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
   blogList:Blog[];


    adding=function()
    {
      console.log("adding");
      
    }
   

}
