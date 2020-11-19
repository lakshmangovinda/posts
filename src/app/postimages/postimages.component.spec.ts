import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostimagesComponent } from './postimages.component';

describe('PostimagesComponent', () => {
  let component: PostimagesComponent;
  let fixture: ComponentFixture<PostimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
