import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecompetanceComponent } from './updatecompetance.component';

describe('UpdatecompetanceComponent', () => {
  let component: UpdatecompetanceComponent;
  let fixture: ComponentFixture<UpdatecompetanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecompetanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecompetanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
