import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatechatComponent } from './updatechat.component';

describe('UpdatechatComponent', () => {
  let component: UpdatechatComponent;
  let fixture: ComponentFixture<UpdatechatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatechatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatechatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
