import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IConfirmComponent } from './i-confirm.component';
import { MaterialModule } from '../material.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
    ],
    exports: [IConfirmComponent],
    declarations: [IConfirmComponent],
    entryComponents: [IConfirmComponent],
    providers: [],
})
export class IConfirmModule { }
