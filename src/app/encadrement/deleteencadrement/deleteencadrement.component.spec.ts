import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteencadrementComponent } from './deleteencadrement.component';

describe('DeleteencadrementComponent', () => {
  let component: DeleteencadrementComponent;
  let fixture: ComponentFixture<DeleteencadrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteencadrementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteencadrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
