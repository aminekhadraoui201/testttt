import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetacheComponent } from './deletetache.component';

describe('DeletetacheComponent', () => {
  let component: DeletetacheComponent;
  let fixture: ComponentFixture<DeletetacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletetacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletetacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
