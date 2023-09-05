import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWpComponent } from './button-wp.component';

describe('ButtonWpComponent', () => {
  let component: ButtonWpComponent;
  let fixture: ComponentFixture<ButtonWpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonWpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
