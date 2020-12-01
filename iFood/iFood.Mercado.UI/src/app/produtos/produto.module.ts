import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../@shared/shared.module';
import { ProdutoCardComponent } from './components/i-produto-card/i-produto-card.component';
import { ProdutoFormComponent } from './pages/produtos-form/produto-form.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';

@NgModule({
  imports:[
    SharedModule,
    RouterModule
  ],
  declarations: [
    ProdutosComponent,
    ProdutoCardComponent,
    ProdutoFormComponent
  ],
  exports: [
    ProdutosComponent,
    ProdutoFormComponent
  ],
})
export class ProdutoModule { }
