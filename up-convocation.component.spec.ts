import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpConvocationComponent } from './up-convocation.component';

describe('UpConvocationComponent', () => {
  let component: UpConvocationComponent;
  let fixture: ComponentFixture<UpConvocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpConvocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpConvocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
