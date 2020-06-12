import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocationComponent } from './convocation.component';

describe('ConvocationComponent', () => {
  let component: ConvocationComponent;
  let fixture: ComponentFixture<ConvocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
