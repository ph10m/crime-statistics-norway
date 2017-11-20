import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DatabaseConnectorService } from './database-connector.service';
import { HttpClient } from '@angular/common/http/src/client';

describe('DatabaseConnectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DatabaseConnectorService]
    });
  });

  it('should be created', inject([DatabaseConnectorService], (service: DatabaseConnectorService) => {
    expect(service).toBeTruthy();
  }));
});
