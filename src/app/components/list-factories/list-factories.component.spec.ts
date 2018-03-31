import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFactoriesComponent } from './list-factories.component';

describe('ListFactoriesComponent', () => {
  let component: ListFactoriesComponent;
  let fixture: ComponentFixture<ListFactoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFactoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFactoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
