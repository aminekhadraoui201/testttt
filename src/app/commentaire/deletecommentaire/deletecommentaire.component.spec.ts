import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecommentaireComponent } from './deletecommentaire.component';

describe('DeletecommentaireComponent', () => {
  let component: DeletecommentaireComponent;
  let fixture: ComponentFixture<DeletecommentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecommentaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletecommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
