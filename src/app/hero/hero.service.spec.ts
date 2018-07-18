import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { HttpClient } from '@angular/common/http';

describe('HeroService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let heroService: HeroService;
  beforeEach(() => {
    heroService = new HeroService(<HttpClient> httpClientSpy);
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
