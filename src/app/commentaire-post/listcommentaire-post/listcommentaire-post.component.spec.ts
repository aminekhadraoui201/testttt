import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcommentairePostComponent } from './listcommentaire-post.component';

describe('ListcommentairePostComponent', () => {
  let component: ListcommentairePostComponent;
  let fixture: ComponentFixture<ListcommentairePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcommentairePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcommentairePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
