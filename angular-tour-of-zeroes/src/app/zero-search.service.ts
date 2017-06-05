import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Zero } from './zero';

@Injectable()
export class ZeroSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Zero[]> {
    return this.http
               .get(`app/zeroes/?name=${term}`)
               .map(response => response.json().data as Zero[]);
               
    /* so, wait, now we're not converting it to a Promise?
      it's a map?
      tutorial says "RxJS operator chaining makes response processing easy and readable."
      bullshit.
    */               
               
  }

}