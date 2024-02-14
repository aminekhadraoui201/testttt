import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListetiquetteComponent } from './listetiquette.component';

describe('ListetiquetteComponent', () => {
  let component: ListetiquetteComponent;
  let fixture: ComponentFixture<ListetiquetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListetiquetteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListetiquetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
