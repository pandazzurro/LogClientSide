import { Injectable } from '@angular/core';
import { JL } from 'jsnlog';

@Injectable()
export class JSLoggerService
{
    logger: JL.JSNLogLogger;

    constructor()
    {
        // Impostare qui il defaultAjaxUrl se necessario diverso da Convention over configuration
        this.logger = JL();
    }

    coreDebug(msg: string) {
		JL.setOptions({ defaultAjaxUrl: "http://localhost:17094/jsnlog.logger" }); // Imposto l'endpoint del progetto Core
        this.logger.debug(msg);
    }

    coreInfo(msg: string) {
		JL.setOptions({ defaultAjaxUrl: "http://localhost:17094/jsnlog.logger" }); // Imposto l'endpoint del progetto Core
        this.logger.info(msg);
    }

    coreError(msg: string) {
		JL.setOptions({ defaultAjaxUrl: "http://localhost:17094/jsnlog.logger" }); // Imposto l'endpoint del progetto Core
        this.logger.error(msg);
    }
	
	fullDebug(msg: string) {
		JL.setOptions({ defaultAjaxUrl: "http://localhost:34178/jsnlog.logger" }); // Imposto l'endpoint del progetto Full Framework
        this.logger.debug(msg);
    }

    fullInfo(msg: string) {
		JL.setOptions({ defaultAjaxUrl: "http://localhost:34178/jsnlog.logger" }); // Imposto l'endpoint del progetto Full Framework
        this.logger.info(msg);
    }

    fullError(msg: string) {
		JL.setOptions({ defaultAjaxUrl: "http://localhost:34178/jsnlog.logger" }); // Imposto l'endpoint del progetto Full Framework
        this.logger.error(msg);
    }
}