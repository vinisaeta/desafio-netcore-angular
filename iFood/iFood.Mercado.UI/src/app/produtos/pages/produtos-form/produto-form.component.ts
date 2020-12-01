import { Notifier } from '../../../@shared/services/notifier.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProdutoService } from '../../../@shared/services/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UUID } from 'angular2-uuid';

@Component({
    templateUrl: './produto-form.component.html',
    styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent implements OnInit {

    public loading : boolean = false;

    public novo : boolean = true;

    public produto : any = {}

    constructor(
        private api : ProdutoService,
        private route : ActivatedRoute,
        private router: Router,
        private notifier : Notifier) {

    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            let id = params['id'];
            if (id) {
                this.api.obter(id).subscribe(produto => {
                    this.novo = false;
                    this.produto = produto;
                    this.loading = false;
                });
            } else {
                this.novo = true;
                this.produto = { id: UUID.UUID()};
                this.loading = false;
            }
        });
    }

    public salvar(): void {
        if(this.novo){
            this.api.adicionar(this.produto).subscribe(result => {
                this.notifier.success("Produto cadastrado com sucesso");
                this.voltar();
            });

        } else {
            this.api.alterar(this.produto).subscribe(result => {
                this.notifier.success("Produto salvo com sucesso");
                this.voltar();
            });
        }
    }

    public remover(): void {
        this.api.remover(this.produto).subscribe(result => {
            this.notifier.success("Produto removido com sucesso");
            this.voltar();
        });
    }

    public voltar() : void {
        this.router.navigate(['/app/produtos']);
    }

    public carregarImagem(event : any) {
        if (event) {
          var reader = new FileReader();

          reader.readAsDataURL(event[0]);

          reader.onload = (event) => {
            this.produto.imagem = event?.target?.result;
          }
        }
      }

      public apagarImagem() : void {
        this.produto.imagem = null;
      }

}
