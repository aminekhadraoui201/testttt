import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteetiquetteComponent } from './deleteetiquette.component';

describe('DeleteetiquetteComponent', () => {
  let component: DeleteetiquetteComponent;
  let fixture: ComponentFixture<DeleteetiquetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteetiquetteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteetiquetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
