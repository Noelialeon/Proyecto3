import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFactoryFormComponent } from './add-factory-form.component';

describe('AddFactoryFormComponent', () => {
  let component: AddFactoryFormComponent;
  let fixture: ComponentFixture<AddFactoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFactoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFactoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
