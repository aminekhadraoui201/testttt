import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddapplicationComponent } from './addapplication.component';

describe('AddapplicationComponent', () => {
  let component: AddapplicationComponent;
  let fixture: ComponentFixture<AddapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddapplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
