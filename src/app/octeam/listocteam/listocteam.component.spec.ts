import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListocteamComponent } from './listocteam.component';

describe('ListocteamComponent', () => {
  let component: ListocteamComponent;
  let fixture: ComponentFixture<ListocteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListocteamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListocteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
