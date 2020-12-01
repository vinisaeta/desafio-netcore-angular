import { ProdutoService } from '../../../@shared/services/produto.service';
import { Component, OnInit } from '@angular/core';
import { PaginatedList } from '../../../@shared/models/paginated-list.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    templateUrl: './produtos.component.html',
    styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

    /**
     *
     */
    public nomeDoProduto: string = '';

    /**
     *
     */
    public loading: boolean = false;

    /**
     * Lista paginada de registros;
     */
    public produtos: PaginatedList<any>;

    constructor(private api : ProdutoService, private router: Router) {
        this.produtos = new PaginatedList({ limite: 10 });
    }

    ngOnInit(): void {
        this.filtrar().subscribe();
    }

    public adicionar(): void {
        this.router.navigate(['app/produto']);
    }

    public alterar(produto : any): void {
        this.router.navigate(['/app/produto'], { queryParams: { id: produto.id } });
    }

    public pesquisar(evt: any): void {
        this.filtrar().subscribe();
    }

    /**
     * Responsável por construir a query de pesquisa da tela;
     */
    private filtrar(): Observable<PaginatedList<any>> {
        this.loading = true;
        return this.api.pesquisar(this.nomeDoProduto, this.produtos.pagina, this.produtos.limite)
            .pipe(tap((result: any) => {
                this.produtos.load(result);
                this.loading = false;
            }));
    }

    /**
     * Carrega a próxima página da lista de produtos;
     */
    public proxima(): void {
        this.produtos.next();
        this.filtrar().subscribe();
    }

    /**
     * Carrega a página anterior da lista de produtos;
     */
    public anterior(): void {
        this.produtos.previous();
        this.filtrar().subscribe();
    }

}
