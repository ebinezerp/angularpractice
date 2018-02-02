import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog } from './blog.component';

describe('BlogComponent', () => {
  let component: Blog;
  let fixture: ComponentFixture<Blog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
