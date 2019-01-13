import SuperController from './super.controller';
import express = require('express');

export class RegisterController extends SuperController {

    public linkRoutes(): void {
        super.linkRoutes();
        this.register();
    }

    public register() {
        this._app.post(`${this._path}/register`, (_req: express.Request, res: express.Response) => {
            res.status(501).end();
        });
    }
}
