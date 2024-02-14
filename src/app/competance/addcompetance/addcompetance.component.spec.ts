import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcompetanceComponent } from './addcompetance.component';

describe('AddcompetanceComponent', () => {
  let component: AddcompetanceComponent;
  let fixture: ComponentFixture<AddcompetanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcompetanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcompetanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
