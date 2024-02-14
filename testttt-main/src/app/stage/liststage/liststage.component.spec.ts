import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListstageComponent } from './liststage.component';

describe('ListstageComponent', () => {
  let component: ListstageComponent;
  let fixture: ComponentFixture<ListstageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListstageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
