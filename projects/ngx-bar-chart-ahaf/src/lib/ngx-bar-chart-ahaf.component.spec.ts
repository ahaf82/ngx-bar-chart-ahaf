import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBarChartAhafComponent } from './ngx-bar-chart-ahaf.component';

describe('NgxBarChartAhafComponent', () => {
  let component: NgxBarChartAhafComponent;
  let fixture: ComponentFixture<NgxBarChartAhafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBarChartAhafComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBarChartAhafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
