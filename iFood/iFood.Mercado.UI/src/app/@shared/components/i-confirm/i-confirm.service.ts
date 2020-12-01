import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmTypes } from './i-confirm-types';
import { IConfirmComponent } from './i-confirm.component';

import { Injectable } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Injectable({
    providedIn: 'root'
})
export class Confirm {

    constructor(private dialog: MatDialog) {}

    public open(title: string, message: string, type: ConfirmTypes): MatDialogRef<IConfirmComponent> {

        return this.dialog.open(IConfirmComponent, {
            width: '680px',
            height: '450px',
            maxWidth: '100%',
            data: {title: title, message: message, type: type}
          });
      }
}
