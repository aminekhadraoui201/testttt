import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddocteamComponent } from './addocteam.component';

describe('AddocteamComponent', () => {
  let component: AddocteamComponent;
  let fixture: ComponentFixture<AddocteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddocteamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddocteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
