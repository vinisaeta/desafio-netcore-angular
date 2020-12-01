import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IHeaderComponent } from './i-header.component';
import { IHeaderSubtitleDirective } from './i-header-subtitle.directive';
import { IHeaderContentDirective } from './i-header-content.directive';
import { MaterialModule } from '../material.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [
        IHeaderComponent,
        IHeaderSubtitleDirective,
        IHeaderContentDirective
    ],
    exports: [
        IHeaderComponent,
        IHeaderSubtitleDirective,
        IHeaderContentDirective
    ]
})
export class IHeaderModule { }
