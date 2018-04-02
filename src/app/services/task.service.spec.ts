import { TestBed, inject } from '@angular/core/testing';

import { TaskService } from './task.service';
import {HttpModule } from '@angular/http';
describe('TaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpModule],
      providers: [TaskService]
    });
  });

  it('should be created', inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));

  it('should have a method get tasks', inject([TaskService], (service: TaskService) => {
    expect(service.getTasks).toBeTruthy();
  }));


});
