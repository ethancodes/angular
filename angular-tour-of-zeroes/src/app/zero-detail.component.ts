import { Component, OnInit }          from '@angular/core';
import { ActivatedRoute, Params }     from '@angular/router';
import { Location }                   from '@angular/common';

import { Zero }        from './zero';
import { ZeroService } from './zero.service';

import 'rxjs/add/operator/switchMap'; /* i'm so glad this follow this other import syntax wtf */

@Component({
  selector: 'zero-detail',
  templateUrl: './zero-detail.component.html',
  styleUrls: [ './zero-detail.component.css' ]
})

export class ZeroDetailComponent implements OnInit {

  zero: Zero;

  constructor(
    private zeroService: ZeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.zeroService.getZero(+params['id']))
      .subscribe(zero => this.zero = zero);
      
    /**
      According to the documentation:
      
      "The hero id is a number. 
      Route parameters are always strings. 
      So the route parameter value is converted to a number with the JavaScript (+) operator."
      
      I think that's the most annoying way to convert something to a number.
      parseInt(params['id']) would at least be a little less obscure
      Or just make the getZero() function do the conversion.
    */
      
  }
  
  goBack(): void {
    this.location.back();
  }
  /** ... really? */
  
  
  save(): void {
    this.zeroService.update(this.zero)
      .then(() => this.goBack());
  }
  
  

}