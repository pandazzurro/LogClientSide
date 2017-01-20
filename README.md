# LogClientSide

Il progetto è formato da 3 applicativi:

 - *Frontend* - Angular2
 - *Backend* - Asp net core
 - *Backend* - Asp net 4.x

**Angular2**
--------
Il progetto è stato generato con [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.
Per lanciare angular in development mode è necessario eseguire `ng serve` , questa istruzione avvia un server web che viene ospitato sull'url `http://localhost:4200/`

***JSNLog***
E' stato creato il servizio jslogger.service.ts con contiene la logica di scrittura del log

***Application Insight***
E' stato installato il pacchetto via **npm** ed utilizzato nel componente di application-insight. 
Non è stato installato nulla sui componenti di backend.

**Asp Net Core**
--------
Il progetto viene ospitato su IIS express sull' url `http://localhost:17094/`. Sono stati aggiunti dei pacchetti per la gestione di JSNLog e Serilog. L'unico file editato è Startup.cs

**Asp Net 4.x**
--------
Il progetto viene ospitato su IIS express sull' url `http://localhost:34178/`. Sono stati aggiunti dei pacchetti per la gestione di JSNLog, JSNLog per Serilog  e Serilog. L'unico file editato è Startup.cs
