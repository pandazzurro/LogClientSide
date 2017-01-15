import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ApplicationInsightComponent } from './application-insight/application-insight.component';
import { JSNlogComponent } from './jsnlog/jsnlog.component';

import { JSLoggerService } from './jslogger.service';


const appRoutes: Routes = [
  { path: 'application-insight', component: ApplicationInsightComponent },
  { path: 'jsnlog', component: JSNlogComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ApplicationInsightComponent,
    JSNlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot()
	],
  providers: [JSLoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }