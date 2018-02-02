import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog.component';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {

    blogList=[{heading:'new heading',content:'new Content'}]

  constructor() {
   
   }

  ngOnInit() {
  }


   adding=function(eventdata)
   {
      console.log(eventdata);
      
   }
}
