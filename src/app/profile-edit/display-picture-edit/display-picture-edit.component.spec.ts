import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPictureEditComponent } from './display-picture-edit.component';

describe('DisplayPictureEditComponent', () => {
  let component: DisplayPictureEditComponent;
  let fixture: ComponentFixture<DisplayPictureEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPictureEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPictureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
