import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLegoComponent } from './view-lego.component';

describe('ViewLegoComponent', () => {
  let component: ViewLegoComponent;
  let fixture: ComponentFixture<ViewLegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
