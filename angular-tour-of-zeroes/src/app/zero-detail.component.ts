import { Component, Input }   from '@angular/core';
import { Zero }               from './zero';

@Component({
  selector: 'zero-detail',
  template: `
    <div *ngIf="zero">
        <h2>{{zero.name}} details...</h2>
        <div><label>id: </label>{{zero.id}}</div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="zero.name" placeholder="name">
        </div>
        <div>
          <label>failures: </label>
          <input [(ngModel)]="zero.failures" placeholder="failures">
        </div>
    </div>
  `  
})

export class ZeroDetailComponent {
  @Input() zero: Zero;
}