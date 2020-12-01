import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Auth } from '../security';
import { Notifier } from '../services/notifier.service';

@Injectable()
export class IFoodErrorHandler implements ErrorHandler {

    constructor(private injector: Injector, private auth: Auth) { }

    handleError(error: Error | HttpErrorResponse) {

        const notifier = this.injector.get(Notifier);
        const router = this.injector.get(Router);

        if (error instanceof HttpErrorResponse) {

            if (!navigator.onLine) {
                return notifier.error('No Internet Connection');
            }

            let errorMsg = error.error.Message || error.message;
            return notifier.error(errorMsg);

        } else {
            console.error(error);
            return notifier.error(error.message);
        }
    }
}
