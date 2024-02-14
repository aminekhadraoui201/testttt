import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedepotComponent } from './deletedepot.component';

describe('DeletedepotComponent', () => {
  let component: DeletedepotComponent;
  let fixture: ComponentFixture<DeletedepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedepotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletedepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
