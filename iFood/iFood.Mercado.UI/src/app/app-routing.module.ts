import { ProdutoFormComponent } from './produtos/pages/produtos-form/produto-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/pages/layout.component';
import { LoginComponent } from './login/pages/login.component';
import { ProdutosComponent } from './produtos/pages/produtos/produtos.component';
import { AuthGuard } from './@shared/security';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  {
      path: 'app', component: LayoutComponent,
      children: [
          { path: 'produtos', component: ProdutosComponent, canActivate: [AuthGuard] },
          { path: 'produto', component: ProdutoFormComponent, canActivate: [AuthGuard] }
      ]
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
