import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'i-produto-card',
    templateUrl: './i-produto-card.component.html',
    styleUrls: ['./i-produto-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProdutoCardComponent implements OnInit{

    public imagem : string = '/assets/img/no-photo.png';

    @Input() nome: string = 'Nome do Produto';

    @Input() preco: number = 0;

    @Input() foto: string = '/assets/img/no-photo.png';

    ngOnInit() : void {
        if(this.foto) {
            this.imagem = this.foto;
        } else {
            this.imagem = '/assets/img/no-photo.png';
        }
    }
}
