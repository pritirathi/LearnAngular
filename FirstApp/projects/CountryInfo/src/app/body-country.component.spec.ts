import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCountryComponent } from './body-country.component';

describe('BodyCountryComponent', () => {
  let component: BodyCountryComponent;
  let fixture: ComponentFixture<BodyCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
