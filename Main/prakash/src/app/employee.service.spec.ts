import { TestBed } from '@angular/core/testing';

import { GameManage } from './employee.service';

describe('EmployeeService', () => {
  let service: GameManage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameManage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
