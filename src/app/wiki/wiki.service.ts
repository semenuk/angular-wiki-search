import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchResults } from './models/search-results';
import { Page } from './models/page';

const WIKI_URL = 'https://ru.wikipedia.org/w/api.php';
const PARAMS = new HttpParams({ fromObject: {
  action: 'opensearch',
  format: 'json',
  limit: '10',
  origin: '*'
}});

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  private pages$ = new BehaviorSubject<Page[]>([]);

  constructor(private http: HttpClient) { }

  get pages() {
    return this.pages$.asObservable();
  }

  // Requests a wiki API and emites array of pages
  search(term: string) {
    this.http.get<SearchResults>(WIKI_URL, {params: PARAMS.set('search', term.trim())})
      .pipe(map(data => this.serializer(data)))
      .subscribe(pages => this.pages$.next(pages));
  }

  // Serializes search results to array of pages
  serializer(result: SearchResults): Page[] {
    const arr = [];
    for (let i = 0; i < result[1].length; i++) {
      arr.push({
        title: result[1][i],
        snippet: result[2][i],
        url: result[3][i]
      });
    }
    return arr;
  }
}
