import { Component } from '@angular/core';
import { ApplicationInsightComponent } from './application-insight/application-insight.component';
/* import AppInsights */
import { AppInsights } from "applicationinsights-js";
import { JSNlogComponent } from './jsnlog/jsnlog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor() {
    }

    ngOnInit() {
    }
}
