import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryCardComponent } from './factory-card.component';

describe('FactoryCardComponent', () => {
  let component: FactoryCardComponent;
  let fixture: ComponentFixture<FactoryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
