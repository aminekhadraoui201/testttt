import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListencadrementComponent } from './listencadrement.component';

describe('ListencadrementComponent', () => {
  let component: ListencadrementComponent;
  let fixture: ComponentFixture<ListencadrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListencadrementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListencadrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
