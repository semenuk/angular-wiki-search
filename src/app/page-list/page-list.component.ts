import { Component, OnInit } from '@angular/core';
import { WikiService } from '../wiki/wiki.service';
import { Page } from '../wiki/models/page';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  pages: Page[];

  constructor(private wiki: WikiService) { }

  ngOnInit() {
    this.wiki.pages.subscribe(pages => this.pages = pages);
  }

}
