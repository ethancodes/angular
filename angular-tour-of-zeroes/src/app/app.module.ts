import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule }         from '@angular/router';
import { HttpModule }           from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { DashboardComponent }   from './dashboard.component';

import { ZeroDetailComponent }  from './zero-detail.component';
import { ZeroesComponent }      from './zeroes.component';
import { ZeroService }          from './zero.service';
import { ZeroSearchComponent }  from './zero-search.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ZeroesComponent,
    ZeroDetailComponent,
    ZeroSearchComponent
  ],
  providers: [ ZeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }