import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListComponent } from './page-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WikiService } from '../wiki/wiki.service';

describe('PageListComponent', () => {
  let component: PageListComponent;
  let fixture: ComponentFixture<PageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageListComponent ],
      providers: [HttpClient, WikiService],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
