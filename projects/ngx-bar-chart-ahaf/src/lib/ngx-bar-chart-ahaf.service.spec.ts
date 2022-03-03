import { TestBed } from '@angular/core/testing';

import { NgxBarChartAhafService } from './ngx-bar-chart-ahaf.service';

describe('NgxBarChartAhafService', () => {
  let service: NgxBarChartAhafService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBarChartAhafService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
