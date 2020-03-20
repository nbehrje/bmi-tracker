import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiItemComponent } from './bmi-item.component';

describe('BmiItemComponent', () => {
  let component: BmiItemComponent;
  let fixture: ComponentFixture<BmiItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmiItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
