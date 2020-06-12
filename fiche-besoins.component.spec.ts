import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheBesoinsComponent } from './fiche-besoins.component';

describe('FicheBesoinsComponent', () => {
  let component: FicheBesoinsComponent;
  let fixture: ComponentFixture<FicheBesoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheBesoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheBesoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
