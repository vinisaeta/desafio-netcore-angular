import { ErrorModule } from './components/i-error/i-error.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './components/material.module';
import { FormFieldModule } from './components/i-form-field/w-form-field.module';
import { ICircleButtonModule } from './components/i-circle-button/i-circle-button.module';
import { IConfirmModule } from './components/i-confirm/i-confirm.module';
import { IHeaderModule } from './components/i-header/i-header.module';
import { IPaginatorModule } from './components/i-paginator/i-paginator.module';
import { ISearchModule } from './components/i-search/i-search.module';
import { IEmptyStateModule } from './components/i-empty-state/i-empty-state.module';
@NgModule({
  imports: [
    MaterialModule,
    RouterModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ErrorModule,
    FormFieldModule,
    ICircleButtonModule,
    IConfirmModule,
    IHeaderModule,
    IPaginatorModule,
    ISearchModule,
    IEmptyStateModule
  ],
  exports: [
    MaterialModule,
    RouterModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ErrorModule,
    FormFieldModule,
    ICircleButtonModule,
    IConfirmModule,
    IHeaderModule,
    IPaginatorModule,
    ISearchModule,
    IEmptyStateModule
  ]
})
export class SharedModule { }
