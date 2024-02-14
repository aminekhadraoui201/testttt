import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletequestionnaireComponent } from './deletequestionnaire.component';

describe('DeletequestionnaireComponent', () => {
  let component: DeletequestionnaireComponent;
  let fixture: ComponentFixture<DeletequestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletequestionnaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletequestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
