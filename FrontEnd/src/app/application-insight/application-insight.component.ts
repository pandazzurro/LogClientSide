import { Component, OnInit } from '@angular/core';
/* import AppInsights */
import { AppInsights } from "applicationinsights-js";
import {MdSnackBar} from '@angular/material';

@Component({
    selector: 'app-application-insight',
    templateUrl: './application-insight.component.html',
    styleUrls: ['./application-insight.component.css']
})
export class ApplicationInsightComponent implements OnInit {

    counterException: number = 1;
    constructor(public snackBar: MdSnackBar) {
        /* Call downloadAndSetup to download full ApplicationInsights script from CDN and initialize it with instrumentation key */
        AppInsights.downloadAndSetup({ instrumentationKey: "3e88c674-ebeb-468a-8435-bc768a67aa17" });
    }

    ngOnInit() {
    }

    ///Inserisce l'evento di pagina visualizzata
    pageView() {
        AppInsights.trackPageView(
            "Componente di esempio", /* (optional) nome della pagina */
            null, /* (optional) url della pagina */
            { nomeFunzione: "pageView", nomeComponents: "ApplicationInsightComponent" }, /* (optional) propriet� evento */
            { numeroEccezioniSessioneCorrente: this.counterException }, /* (optional) dizionario di metriche */
            2345 /* durata caricamento pagina in millisecondi */
        );

        //Per vederla subito su portale
        AppInsights.flush();

        this.snackBar.open("pageView", "pageView", { duration: 2000});
    }

    /// Inserisce una informazione di tracciatura
    sendTrace() {
        var proprietaTraccia : any = { nomeFunzione: "tracciaEvento", nomeComponents: "ApplicationInsightComponent" };
        AppInsights.trackTrace("Traccia", proprietaTraccia);


        //Per vederla subito su portale
        AppInsights.flush();

         this.snackBar.open("sendTrace", "sendTrace", { duration: 2000});
    }

    ///Inserisce un evento generico
    sendEvent() {
        AppInsights.trackEvent("Evento di test",
            { prop1: "prop1", prop2: "prop2" },
            { measurement1: 100 }
        );


        //Per vederla subito su portale
        AppInsights.flush();

        this.snackBar.open("sendEvent", "sendEvent", { duration: 2000});
    }

    ///Inserisce una eccezione
    sendException() {
        this.counterException = this.counterException + 1;
        AppInsights.startTrackEvent("Eccezione" + this.counterException);
        AppInsights.trackException(new Error("Messaggio di errore" + this.counterException ));
        AppInsights.stopTrackEvent("Eccezione" + this.counterException.toString(),
            { numeroEccezioniSessioneCorrente: this.counterException.toString() }
        );

        //Per vederla subito su portale
        AppInsights.flush();

        this.snackBar.open("sendException", "sendException", { duration: 2000});
    }
}
