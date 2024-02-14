import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletelogistiquesComponent } from './deletelogistiques.component';

describe('DeletelogistiquesComponent', () => {
  let component: DeletelogistiquesComponent;
  let fixture: ComponentFixture<DeletelogistiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletelogistiquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletelogistiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
