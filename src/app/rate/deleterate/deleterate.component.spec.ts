import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleterateComponent } from './deleterate.component';

describe('DeleterateComponent', () => {
  let component: DeleterateComponent;
  let fixture: ComponentFixture<DeleterateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleterateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleterateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
