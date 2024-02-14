import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddencadrementComponent } from './addencadrement.component';

describe('AddencadrementComponent', () => {
  let component: AddencadrementComponent;
  let fixture: ComponentFixture<AddencadrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddencadrementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddencadrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
