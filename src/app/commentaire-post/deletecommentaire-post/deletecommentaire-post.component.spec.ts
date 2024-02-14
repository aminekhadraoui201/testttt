import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecommentairePostComponent } from './deletecommentaire-post.component';

describe('DeletecommentairePostComponent', () => {
  let component: DeletecommentairePostComponent;
  let fixture: ComponentFixture<DeletecommentairePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecommentairePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletecommentairePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
