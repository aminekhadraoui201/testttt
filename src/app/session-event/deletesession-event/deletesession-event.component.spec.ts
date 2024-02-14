import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletesessionEventComponent } from './deletesession-event.component';

describe('DeletesessionEventComponent', () => {
  let component: DeletesessionEventComponent;
  let fixture: ComponentFixture<DeletesessionEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletesessionEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletesessionEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
