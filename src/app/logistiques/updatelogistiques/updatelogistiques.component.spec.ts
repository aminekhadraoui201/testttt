import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelogistiquesComponent } from './updatelogistiques.component';

describe('UpdatelogistiquesComponent', () => {
  let component: UpdatelogistiquesComponent;
  let fixture: ComponentFixture<UpdatelogistiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatelogistiquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatelogistiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
