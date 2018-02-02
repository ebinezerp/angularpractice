import { Component, OnInit } from '@angular/core';
import { BloglistComponent } from './bloglist/bloglist.component';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class Blog implements OnInit {

 


 @Output() addBlog=new EventEmitter();
 heading: string;
  content: string;
  ngOnInit() {
  }


  test=function()
  {
     console.log('hello');
     this.addBlog.emit();
  }


  


  

}
