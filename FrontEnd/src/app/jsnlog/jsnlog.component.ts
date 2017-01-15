import { Component, OnInit } from '@angular/core';
import { JSLoggerService } from '../jslogger.service';
import {MdSnackBar} from '@angular/material';

@Component({
    selector: 'app-jsnlog',
    templateUrl: './jsnlog.component.html',
    styleUrls: ['./jsnlog.component.css']
})
export class JSNlogComponent implements OnInit {

    constructor(private _jsnlog: JSLoggerService, public snackBar: MdSnackBar) {
	    
    }

    ngOnInit() {
    }
	
	fullDebug() {
        this._jsnlog.fullDebug("asp net FULL Debug");
        this.snackBar.open("asp net FULL Debug", "fullDebug", { duration: 2000});
    }

    fullInfo() {
        this._jsnlog.fullInfo("asp net FULL Info");
        this.snackBar.open("asp net FULL Info", "fullInfo", { duration: 2000});
    }

    fullError() {
        this._jsnlog.fullError("asp net FULL Error");
        this.snackBar.open("asp net FULL Error", "fullError", { duration: 2000});
    }

	coreDebug() {
        this._jsnlog.coreDebug("asp net core Debug");
        this.snackBar.open("asp net core Debug", "coreDebug", { duration: 2000});
    }

    coreInfo() {
        this._jsnlog.coreInfo("asp net core Info");
        this.snackBar.open("asp net core Info", "coreInfo", { duration: 2000});
    }

    coreError() {
        this._jsnlog.coreError("asp net core Error");
        this.snackBar.open("asp net core Error", "coreError", { duration: 2000});
    }	
}

