import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesessionEventComponent } from './updatesession-event.component';

describe('UpdatesessionEventComponent', () => {
  let component: UpdatesessionEventComponent;
  let fixture: ComponentFixture<UpdatesessionEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatesessionEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatesessionEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
