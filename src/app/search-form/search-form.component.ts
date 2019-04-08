import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { WikiService } from '../wiki/wiki.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  searchInput = new FormControl('', [Validators.required, Validators.minLength(3)]);
  lastRequests: string[];

  constructor(private wiki: WikiService) {
    this.showLastRequests = this.showLastRequests.bind(this);
  }

  ngOnInit() {
    // Get last requests from local storage
    const lastRequests = localStorage.getItem('lastRequests');
    this.lastRequests = lastRequests ? JSON.parse(lastRequests) : [];
  }

  // ngbTypeahead show last requests
  showLastRequests(text$: Observable<string>) {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? [] : this.lastRequests.filter(value => {
        return value.toLowerCase().indexOf(term.toLowerCase()) > -1;
      }).slice(0, 5))
    );
  }

  onSubmit() {
    const input = this.searchInput;
    if (input.valid) {
      this.wiki.search(input.value);

      // Uniqueness check
      const newRequest = input.value.toLowerCase().trim();
      if (this.lastRequests.includes(newRequest)) {
        return;
      }

      // Save last requests in local storage
      this.lastRequests.push(newRequest);
      localStorage.setItem('lastRequests', JSON.stringify(this.lastRequests.slice(-16)));
    }
  }
}
