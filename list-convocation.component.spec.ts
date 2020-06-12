import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConvocationComponent } from './list-convocation.component';

describe('ListConvocationComponent', () => {
  let component: ListConvocationComponent;
  let fixture: ComponentFixture<ListConvocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListConvocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConvocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
