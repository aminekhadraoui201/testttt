import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcompetanceComponent } from './listcompetance.component';

describe('ListcompetanceComponent', () => {
  let component: ListcompetanceComponent;
  let fixture: ComponentFixture<ListcompetanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcompetanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcompetanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
