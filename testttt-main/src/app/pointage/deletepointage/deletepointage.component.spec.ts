import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletepointageComponent } from './deletepointage.component';

describe('DeletepointageComponent', () => {
  let component: DeletepointageComponent;
  let fixture: ComponentFixture<DeletepointageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletepointageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletepointageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
