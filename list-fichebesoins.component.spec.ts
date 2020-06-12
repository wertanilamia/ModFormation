import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFichebesoinsComponent } from './list-fichebesoins.component';

describe('ListFichebesoinsComponent', () => {
  let component: ListFichebesoinsComponent;
  let fixture: ComponentFixture<ListFichebesoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFichebesoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFichebesoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
