import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPaginatorComponent } from './i-paginator.component';
import { ICircleButtonModule } from '../i-circle-button/i-circle-button.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ICircleButtonModule
  ],
  exports: [IPaginatorComponent],
  declarations: [IPaginatorComponent]
})
export class IPaginatorModule { }
