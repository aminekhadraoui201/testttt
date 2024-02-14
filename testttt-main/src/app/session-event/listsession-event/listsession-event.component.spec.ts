import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsessionEventComponent } from './listsession-event.component';

describe('ListsessionEventComponent', () => {
  let component: ListsessionEventComponent;
  let fixture: ComponentFixture<ListsessionEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsessionEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsessionEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
