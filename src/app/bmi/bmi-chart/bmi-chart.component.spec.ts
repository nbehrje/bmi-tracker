import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiGraphComponent } from './bmi-graph.component';

describe('BmiGraphComponent', () => {
  let component: BmiGraphComponent;
  let fixture: ComponentFixture<BmiGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmiGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
