import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFactoryPageComponent } from './add-factory-page.component';

describe('AddFactoryPageComponent', () => {
  let component: AddFactoryPageComponent;
  let fixture: ComponentFixture<AddFactoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFactoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFactoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
