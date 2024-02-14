import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatequestionnaireComponent } from './updatequestionnaire.component';

describe('UpdatequestionnaireComponent', () => {
  let component: UpdatequestionnaireComponent;
  let fixture: ComponentFixture<UpdatequestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatequestionnaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatequestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
