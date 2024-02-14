import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlogistiquesComponent } from './addlogistiques.component';

describe('AddlogistiquesComponent', () => {
  let component: AddlogistiquesComponent;
  let fixture: ComponentFixture<AddlogistiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlogistiquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddlogistiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
