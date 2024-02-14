import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatereponseComponent } from './updatereponse.component';

describe('UpdatereponseComponent', () => {
  let component: UpdatereponseComponent;
  let fixture: ComponentFixture<UpdatereponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatereponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatereponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
