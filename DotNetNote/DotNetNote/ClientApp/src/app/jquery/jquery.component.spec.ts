import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryComponent } from './jquery.component';

describe('JqueryComponent', () => {
  let component: JqueryComponent;
  let fixture: ComponentFixture<JqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
