import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletereponseComponent } from './deletereponse.component';

describe('DeletereponseComponent', () => {
  let component: DeletereponseComponent;
  let fixture: ComponentFixture<DeletereponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletereponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletereponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
