import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './i-form-field.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [FormFieldComponent],
  exports: [FormFieldComponent]
})
export class FormFieldModule { }
