import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayout1Component } from './admin-layout1.component';

describe('AdminLayout1Component', () => {
  let component: AdminLayout1Component;
  let fixture: ComponentFixture<AdminLayout1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLayout1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLayout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
