import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecommentairePostComponent } from './updatecommentaire-post.component';

describe('UpdatecommentairePostComponent', () => {
  let component: UpdatecommentairePostComponent;
  let fixture: ComponentFixture<UpdatecommentairePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecommentairePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecommentairePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
