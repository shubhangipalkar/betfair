import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './material-design/material-design.module';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BetfairapiService } from './betfairapi.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    HomeComponent,
    PageNotFoundComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([])

  ],
  providers: [BetfairapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
