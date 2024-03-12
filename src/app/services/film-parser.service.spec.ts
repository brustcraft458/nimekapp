import { TestBed } from '@angular/core/testing';

import { FilmParserService } from './film-parser.service';

describe('FilmParserService', () => {
  let service: FilmParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
