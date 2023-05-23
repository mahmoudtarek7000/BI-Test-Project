import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from '@full-fledged/alerts';
import { IconsModule } from '@progress/kendo-angular-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { GridModule } from '@progress/kendo-angular-grid';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PagerModule } from '@progress/kendo-angular-pager';
import { FilterModule } from '@progress/kendo-angular-filter';
import { BIModulesModule } from 'bi-modules';
import { LayoutModule } from '@progress/kendo-angular-layout';
import {MatTabsModule} from "@angular/material/tabs";





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, positionY: "top"}),
    IconsModule,
    BrowserAnimationsModule,
    DateInputsModule,
    BrowserAnimationsModule,
    GridModule,
    HttpClientModule,
    ReactiveFormsModule,
    PagerModule,
    FilterModule,
    BIModulesModule,
    LayoutModule,
    MatTabsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
