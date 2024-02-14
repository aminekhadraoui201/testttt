import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsessionEventComponent } from './addsession-event.component';

describe('AddsessionEventComponent', () => {
  let component: AddsessionEventComponent;
  let fixture: ComponentFixture<AddsessionEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsessionEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsessionEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
