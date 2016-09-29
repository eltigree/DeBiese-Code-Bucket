﻿/// <reference path="../_app.ts" />
'use strict';
module DeBiese.NgResources.Part2.Services {
    export interface ILogService {
        log: (msg: string) => void;
    }

    export class LogService implements ILogService {
        static $inject: string[] = [];
        static id: string = "logService";

        constructor() {
        }

        log(msg: string): void {
            console.log(msg);
        }
    }

    app.service(DeBiese.NgResources.Part2.Services.LogService.id, DeBiese.NgResources.Part2.Services.LogService);
}