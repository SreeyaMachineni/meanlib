import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditBookComponent } from './add-or-edit-book.component';

describe('AddOrEditBookComponent', () => {
  let component: AddOrEditBookComponent;
  let fixture: ComponentFixture<AddOrEditBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
