import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlogistiquesComponent } from './listlogistiques.component';

describe('ListlogistiquesComponent', () => {
  let component: ListlogistiquesComponent;
  let fixture: ComponentFixture<ListlogistiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListlogistiquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListlogistiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
