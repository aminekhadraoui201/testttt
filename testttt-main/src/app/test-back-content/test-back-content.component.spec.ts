import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBackContentComponent } from './test-back-content.component';

describe('TestBackContentComponent', () => {
  let component: TestBackContentComponent;
  let fixture: ComponentFixture<TestBackContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestBackContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestBackContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
