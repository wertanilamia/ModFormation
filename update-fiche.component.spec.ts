import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFicheComponent } from './update-fiche.component';

describe('UpdateFicheComponent', () => {
  let component: UpdateFicheComponent;
  let fixture: ComponentFixture<UpdateFicheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFicheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
