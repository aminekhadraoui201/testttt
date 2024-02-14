import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletereclamationComponent } from './deletereclamation.component';

describe('DeletereclamationComponent', () => {
  let component: DeletereclamationComponent;
  let fixture: ComponentFixture<DeletereclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletereclamationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletereclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
