import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteocteamComponent } from './deleteocteam.component';

describe('DeleteocteamComponent', () => {
  let component: DeleteocteamComponent;
  let fixture: ComponentFixture<DeleteocteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteocteamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteocteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
