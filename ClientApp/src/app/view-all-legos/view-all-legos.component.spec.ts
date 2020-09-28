import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllLegosComponent } from './view-all-legos.component';

describe('ViewAllLegosComponent', () => {
  let component: ViewAllLegosComponent;
  let fixture: ComponentFixture<ViewAllLegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllLegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllLegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
