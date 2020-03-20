import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiListComponent } from './bmi-list.component';

describe('BmiListComponent', () => {
  let component: BmiListComponent;
  let fixture: ComponentFixture<BmiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
