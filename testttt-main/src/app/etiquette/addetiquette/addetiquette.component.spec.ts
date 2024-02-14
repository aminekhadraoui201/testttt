import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddetiquetteComponent } from './addetiquette.component';

describe('AddetiquetteComponent', () => {
  let component: AddetiquetteComponent;
  let fixture: ComponentFixture<AddetiquetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddetiquetteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddetiquetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
