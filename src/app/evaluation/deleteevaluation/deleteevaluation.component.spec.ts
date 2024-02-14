import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteevaluationComponent } from './deleteevaluation.component';

describe('DeleteevaluationComponent', () => {
  let component: DeleteevaluationComponent;
  let fixture: ComponentFixture<DeleteevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteevaluationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
