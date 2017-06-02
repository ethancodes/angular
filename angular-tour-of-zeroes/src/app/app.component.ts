import { Component }    from '@angular/core';
import { OnInit }       from '@angular/core';

import { Zero }         from './zero';
import { ZeroService }  from './zero.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    
    <h2>The Zeroes</h2>
    <ul class="zeroes">
        <li *ngFor="let z of zeroes" 
            [class.selected]="z === selectedZero"
            (click)="onSelect(z)">
            <span class="badge">{{z.id}}</span>
            {{z.name}}
        </li>
    </ul>
    
    <zero-detail [zero]="selectedZero"></zero-detail>
  `,
  styles: [`
      .selected {
    	background-color: #CFD8DC !important;
    	color: white;
      }
      .zeroes {
    	margin: 0 0 2em 0;
    	list-style-type: none;
    	padding: 0;
    	width: 15em;
      }
      .zeroes li {
    	cursor: pointer;
    	position: relative;
    	left: 0;
    	background-color: #EEE;
    	margin: .5em;
    	padding: .3em 0;
    	height: 1.6em;
    	border-radius: 4px;
      }
      .zeroes li.selected:hover {
    	background-color: #BBD8DC !important;
    	color: white;
      }
      .zeroes li:hover {
    	color: #607D8B;
    	background-color: #DDD;
    	left: .1em;
      }
      .zeroes .text {
    	position: relative;
    	top: -3px;
      }
      .zeroes .badge {
    	display: inline-block;
    	font-size: small;
    	color: white;
    	padding: 0.8em 0.7em 0 0.7em;
    	background-color: #607D8B;
    	line-height: 1em;
    	position: relative;
    	left: -1px;
    	top: -4px;
    	height: 1.8em;
    	margin-right: .8em;
    	border-radius: 4px 0 0 4px;
      }
  `],
  providers: [ZeroService]
})

export class AppComponent implements OnInit {

  title = 'Tour of Zeroes';
  zeroes: Zero[];
  selectedZero: Zero;

  onSelect(z: Zero): void {
    this.selectedZero = z;
  }
  
  constructor(private zeroService: ZeroService) { }
  
  ngOnInit(): void {
    this.getZeroes();
  }
  
  getZeroes(): void {
    this.zeroService.getZeroesSlowly().then(zeroes => this.zeroes = zeroes);
  }

}


