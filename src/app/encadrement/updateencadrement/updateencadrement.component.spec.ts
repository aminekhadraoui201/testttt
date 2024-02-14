import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateencadrementComponent } from './updateencadrement.component';

describe('UpdateencadrementComponent', () => {
  let component: UpdateencadrementComponent;
  let fixture: ComponentFixture<UpdateencadrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateencadrementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateencadrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
