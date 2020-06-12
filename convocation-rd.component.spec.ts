import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocationRDComponent } from './convocation-rd.component';

describe('ConvocationRDComponent', () => {
  let component: ConvocationRDComponent;
  let fixture: ComponentFixture<ConvocationRDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvocationRDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvocationRDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
