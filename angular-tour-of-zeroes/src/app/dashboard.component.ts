import { Component, OnInit }  from '@angular/core';

import { Zero }               from './zero';
import { ZeroService }        from './zero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  zeroes: Zero[] = [];
  
  constructor(private zeroService: ZeroService) { }
  
  ngOnInit(): void {
    this.zeroService.getZeroes().then(zeroes => this.zeroes = zeroes.slice(0, 2));
  }

}