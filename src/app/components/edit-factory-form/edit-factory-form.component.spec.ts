import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFactoryFormComponent } from './edit-factory-form.component';

describe('EditFactoryFormComponent', () => {
  let component: EditFactoryFormComponent;
  let fixture: ComponentFixture<EditFactoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFactoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFactoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
