import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PrimeNGConfig } from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelLapComponent } from './panel-lap/panel-lap.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PanelLapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    InputTextModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
