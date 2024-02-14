import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterateComponent } from './updaterate.component';

describe('UpdaterateComponent', () => {
  let component: UpdaterateComponent;
  let fixture: ComponentFixture<UpdaterateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdaterateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdaterateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
