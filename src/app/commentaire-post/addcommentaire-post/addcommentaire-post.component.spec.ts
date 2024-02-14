import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcommentairePostComponent } from './addcommentaire-post.component';

describe('AddcommentairePostComponent', () => {
  let component: AddcommentairePostComponent;
  let fixture: ComponentFixture<AddcommentairePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcommentairePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcommentairePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
