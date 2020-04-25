import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CovidViewComponent } from './covid-view/covid-view.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StateViewComponent } from './state-view/state-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CovidViewComponent,
    StateViewComponent
  ],
  imports: [  
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: CovidViewComponent },      
      { path: 'state/:id', component: StateViewComponent }      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
