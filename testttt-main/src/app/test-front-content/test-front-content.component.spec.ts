import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFrontContentComponent } from './test-front-content.component';

describe('TestFrontContentComponent', () => {
  let component: TestFrontContentComponent;
  let fixture: ComponentFixture<TestFrontContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFrontContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestFrontContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
