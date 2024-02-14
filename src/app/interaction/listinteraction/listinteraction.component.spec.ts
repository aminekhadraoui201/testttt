import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinteractionComponent } from './listinteraction.component';

describe('ListinteractionComponent', () => {
  let component: ListinteractionComponent;
  let fixture: ComponentFixture<ListinteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListinteractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListinteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
