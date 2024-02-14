import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquestionnaireComponent } from './addquestionnaire.component';

describe('AddquestionnaireComponent', () => {
  let component: AddquestionnaireComponent;
  let fixture: ComponentFixture<AddquestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddquestionnaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddquestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
