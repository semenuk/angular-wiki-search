import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { PageListComponent } from './page-list/page-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WikiService } from './wiki/wiki.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      providers: [HttpClient, WikiService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'wiki'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('wiki');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Wiki-search');
  });
});
