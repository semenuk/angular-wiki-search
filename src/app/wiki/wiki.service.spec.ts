import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WikiService } from './wiki.service';

import { mockSearchResults, mockPages } from './wiki.mocks';
import { Page } from './models/page';

describe('WikiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [WikiService]
  }));

  it('should be created', () => {
    const service: WikiService = TestBed.get(WikiService);
    expect(service).toBeTruthy();
  });

  it('method `serializer` should returns array of pages', inject([WikiService], (wiki: WikiService) => {
    const pages = wiki.serializer(mockSearchResults);
    expect(pages).toEqual(mockPages);
  }));

  it('property `pages` should returns observable with empy array', inject([WikiService],
    (wiki: WikiService) => {
      let pages: Page[];
      wiki.pages.subscribe(data => pages = data);
      expect(pages).toEqual([]);
  }));

  it('method `search` should emites array of pages', inject([WikiService, HttpTestingController],
    (wiki: WikiService, backend: HttpTestingController) => {

      let pages: Page[];
      wiki.pages.subscribe(data => pages = data);
      wiki.search('hello');

      backend.expectOne({
        method: 'GET',
        url: 'https://ru.wikipedia.org/w/api.php?action=opensearch&format=json&limit=10&origin=*&search=hello'
      }).flush(mockSearchResults);

      expect(pages).toEqual(mockPages);
  }));
});
