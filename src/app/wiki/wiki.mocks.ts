import { Page } from './models/page';
import { SearchResults } from './models/search-results';

export const mockSearchResults: SearchResults = [
    'Hello',
    [
      'Hello1',
      'Hello2',
      'Hello3'
    ],
    [
      'Hello world1',
      'Hello world2',
      'Hello world3'
    ],
    [
      'https://en.wikipedia.org/wiki/hello1',
      'https://en.wikipedia.org/wiki/hello2',
      'https://en.wikipedia.org/wiki/hello3'
    ]
];
export const mockPages: Page[] = [
    {title: 'Hello1', snippet: 'Hello world1', url: 'https://en.wikipedia.org/wiki/hello1'},
    {title: 'Hello2', snippet: 'Hello world2', url: 'https://en.wikipedia.org/wiki/hello2'},
    {title: 'Hello3', snippet: 'Hello world3', url: 'https://en.wikipedia.org/wiki/hello3'}
];
