import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';

import { AppComponent }         from './app.component';

import { ZeroDetailComponent }  from './zero-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ZeroDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }