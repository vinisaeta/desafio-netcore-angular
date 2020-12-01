import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IEmptyStateComponent, IEmptyStateActionDirective } from './i-empty-state.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [IEmptyStateComponent, IEmptyStateActionDirective],
  declarations: [IEmptyStateComponent, IEmptyStateActionDirective]
})
export class IEmptyStateModule { }
