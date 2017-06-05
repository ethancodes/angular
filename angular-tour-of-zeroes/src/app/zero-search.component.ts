import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { ZeroSearchService } from './zero-search.service';
import { Zero } from './zero';

@Component({
  selector: 'zero-search',
  templateUrl: './zero-search.component.html',
  styleUrls: [ './zero-search.component.css' ],
  providers: [ZeroSearchService]
})

export class ZeroSearchComponent implements OnInit {

  zeroes: Observable<Zero[]>;
  
  private searchTerms = new Subject<string>();
  
  constructor(
    private zeroSearchService: ZeroSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.zeroes = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.zeroSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Zero[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Zero[]>([]);
      });
  }
  
  gotoDetail(zero: Zero): void {
    let link = ['/zero', zero.id];
    this.router.navigate(link);
  }
  
}