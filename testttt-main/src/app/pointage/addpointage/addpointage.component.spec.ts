import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpointageComponent } from './addpointage.component';

describe('AddpointageComponent', () => {
  let component: AddpointageComponent;
  let fixture: ComponentFixture<AddpointageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpointageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpointageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
