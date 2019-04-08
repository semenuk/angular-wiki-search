import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { PageListComponent } from './page-list/page-list.component';
import { WikiService } from './wiki/wiki.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    PageListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient, WikiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
