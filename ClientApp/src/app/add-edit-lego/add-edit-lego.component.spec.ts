import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLegoComponent } from './add-edit-lego.component';

describe('AddEditLegoComponent', () => {
  let component: AddEditLegoComponent;
  let fixture: ComponentFixture<AddEditLegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditLegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
