import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListevaluationComponent } from './listevaluation.component';

describe('ListevaluationComponent', () => {
  let component: ListevaluationComponent;
  let fixture: ComponentFixture<ListevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListevaluationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
