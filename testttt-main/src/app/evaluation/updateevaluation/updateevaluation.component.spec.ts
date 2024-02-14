import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateevaluationComponent } from './updateevaluation.component';

describe('UpdateevaluationComponent', () => {
  let component: UpdateevaluationComponent;
  let fixture: ComponentFixture<UpdateevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateevaluationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
