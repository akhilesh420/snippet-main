import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStickersEditComponent } from './display-stickers-edit.component';

describe('DisplayStickersEditComponent', () => {
  let component: DisplayStickersEditComponent;
  let fixture: ComponentFixture<DisplayStickersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayStickersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayStickersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
