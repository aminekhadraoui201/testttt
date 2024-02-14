import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteformationComponent } from './deleteformation.component';

describe('DeleteformationComponent', () => {
  let component: DeleteformationComponent;
  let fixture: ComponentFixture<DeleteformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
