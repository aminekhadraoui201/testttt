import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateocteamComponent } from './updateocteam.component';

describe('UpdateocteamComponent', () => {
  let component: UpdateocteamComponent;
  let fixture: ComponentFixture<UpdateocteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateocteamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateocteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
