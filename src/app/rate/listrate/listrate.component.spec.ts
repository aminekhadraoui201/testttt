import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrateComponent } from './listrate.component';

describe('ListrateComponent', () => {
  let component: ListrateComponent;
  let fixture: ComponentFixture<ListrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListrateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
