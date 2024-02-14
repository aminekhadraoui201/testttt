import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecompetanceComponent } from './deletecompetance.component';

describe('DeletecompetanceComponent', () => {
  let component: DeletecompetanceComponent;
  let fixture: ComponentFixture<DeletecompetanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecompetanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletecompetanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
