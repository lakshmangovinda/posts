import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CseaComponent } from './csea.component';

describe('CseaComponent', () => {
  let component: CseaComponent;
  let fixture: ComponentFixture<CseaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CseaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CseaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
