import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepointageComponent } from './updatepointage.component';

describe('UpdatepointageComponent', () => {
  let component: UpdatepointageComponent;
  let fixture: ComponentFixture<UpdatepointageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepointageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatepointageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
