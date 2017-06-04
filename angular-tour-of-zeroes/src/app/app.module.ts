import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule }         from '@angular/router';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { DashboardComponent }   from './dashboard.component';

import { ZeroDetailComponent }  from './zero-detail.component';
import { ZeroesComponent }      from './zeroes.component';
import { ZeroService }          from './zero.service';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ZeroesComponent,
    ZeroDetailComponent
  ],
  providers: [ ZeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }