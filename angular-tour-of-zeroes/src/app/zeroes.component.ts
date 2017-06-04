import { Component }    from '@angular/core';
import { OnInit }       from '@angular/core';
import { Router }       from '@angular/router';

import { Zero }         from './zero';
import { ZeroService }  from './zero.service';


@Component({
  selector: 'my-zeroes',
  templateUrl: './zeroes.component.html',
  styleUrls: [ './zeroes.component.css' ],
})

export class ZeroesComponent implements OnInit {

  zeroes: Zero[];
  selectedZero: Zero;

  onSelect(z: Zero): void {
    this.selectedZero = z;
  }
  
  constructor(
    private zeroService: ZeroService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.getZeroes();
  }
  
  getZeroes(): void {
    this.zeroService.getZeroes().then(zeroes => this.zeroes = zeroes);
  }
  
  goToDetail(): void {
    this.router.navigate(['/zero', this.selectedZero.id]);
  }

}


