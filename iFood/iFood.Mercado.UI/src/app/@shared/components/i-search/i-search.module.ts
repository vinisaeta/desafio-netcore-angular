import { ISearchBarComponent } from './i-search-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ISearchComponent } from './i-search.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule
    ],
    declarations: [
        ISearchComponent,
        ISearchBarComponent
    ],
    exports: [
        ISearchComponent,
        ISearchBarComponent
    ]
})
export class ISearchModule { }
