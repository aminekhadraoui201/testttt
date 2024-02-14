import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateetiquetteComponent } from './updateetiquette.component';

describe('UpdateetiquetteComponent', () => {
  let component: UpdateetiquetteComponent;
  let fixture: ComponentFixture<UpdateetiquetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateetiquetteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateetiquetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
