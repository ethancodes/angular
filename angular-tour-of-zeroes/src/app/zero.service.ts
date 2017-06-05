import { Injectable }     from '@angular/core';
import { Headers, Http }  from '@angular/http';

import 'rxjs/add/operator/toPromise'; // sigh

import { Zero }           from './zero';

@Injectable()
export class ZeroService {

  private zeroesUrl = 'api/zeroes';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  
  constructor(private http: Http) { }

  getZero(id: number): Promise<Zero> {
  
    const url = `${this.zeroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Zero)
      .catch(this.handleError);
  
  }
  
  getZeroes(): Promise<Zero[]> {

    /* this is so ugly and it's not even clear what it's doing
        this is supposed to be better?
    */
    return this.http.get(this.zeroesUrl)
              .toPromise()
              .then(response => response.json().data as Zero[])
              .catch(this.handleError);
    

  }
  
  getZeroesSlowly(): Promise<Zero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getZeroes()), 3000);
    });
  }
  
  
  create(name: string): Promise<Zero> {
  
    return this.http
            .post(this.zeroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Zero)
            .catch(this.handleError);
  
  }
  
  update(zero: Zero): Promise<Zero> {
  
    const url = `${this.zeroesUrl}/${zero.id}`;
    return this.http
            .put(url, JSON.stringify(zero), {headers: this.headers})
            .toPromise()
            .then(() => zero)
            .catch(this.handleError);
  
    /* JSON.stringify() works by magic even though we never imported it anywhere? sure, why not. */
  
  }
  
  delete(id: number): Promise<void> {
    /* ah, yes. the promise of the void. */
    
    const url = `${this.zeroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    
  }
  
  
  /* so, if i understand this correctly
    you never return a thing
    you return THE PROMISE of a thing
    */
  private handleError(error: any): Promise<any> {
  
    console.error('Holy crap something went wrong', error);
    return Promise.reject(error.message || errror);
  
  }
  
}