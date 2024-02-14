import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpointageComponent } from './listpointage.component';

describe('ListpointageComponent', () => {
  let component: ListpointageComponent;
  let fixture: ComponentFixture<ListpointageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpointageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListpointageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
