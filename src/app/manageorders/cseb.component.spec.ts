import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsebComponent } from './cseb.component';

describe('CsebComponent', () => {
  let component: CsebComponent;
  let fixture: ComponentFixture<CsebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
