import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormComponent } from './search-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';
import { WikiService } from '../wiki/wiki.service';
import { HttpClientModule } from '@angular/common/http';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFormComponent ],
      imports: [HttpClientModule, NgbModule, FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
