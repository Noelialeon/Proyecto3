import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryExportsComponent } from './country-exports.component';

describe('CountryExportsComponent', () => {
  let component: CountryExportsComponent;
  let fixture: ComponentFixture<CountryExportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryExportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryExportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
