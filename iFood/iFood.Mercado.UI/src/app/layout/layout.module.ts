import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../@shared/shared.module';
import { LayoutComponent } from './pages/layout.component';
import { INavbarComponent } from './components/i-navbar/i-navbar.component';

@NgModule({
  imports:[
    SharedModule,
    RouterModule
  ],
  declarations: [
    LayoutComponent,
    INavbarComponent
  ],
  exports: [
    LayoutComponent
  ],
})
export class LayoutModule { }
