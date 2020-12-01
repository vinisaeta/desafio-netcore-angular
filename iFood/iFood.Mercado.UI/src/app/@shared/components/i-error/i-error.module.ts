import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './i-error.component';
import { FormsModule } from '@angular/forms';
import { ErrorMessageComponent } from './i-error-message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
      ErrorComponent,
      ErrorMessageComponent],
  exports: [
      ErrorComponent,
      ErrorMessageComponent
    ]
})
export class ErrorModule { }
