/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JSNlogComponent } from './jsnlog.component';

describe('JSNlogComponent', () => {
  let component: JSNlogComponent;
  let fixture: ComponentFixture<JSNlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JSNlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JSNlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
