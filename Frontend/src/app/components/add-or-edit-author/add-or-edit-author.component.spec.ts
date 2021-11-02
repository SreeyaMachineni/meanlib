import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditAuthorComponent } from './add-or-edit-author.component';

describe('AddOrEditAuthorComponent', () => {
  let component: AddOrEditAuthorComponent;
  let fixture: ComponentFixture<AddOrEditAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
