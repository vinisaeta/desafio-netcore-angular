export interface PaginatedListOptions {
    pagina?: number;
    limite?: number;
}

export class PaginatedList<T> {

    public pagina: number = 0;
    public limite: number = 10;
    public total: number = 0;
    public itens: Array<T>;

    constructor(options? : PaginatedListOptions) {

        if(options) {
            this.pagina = options.pagina || 0;
            this.limite = options.limite || 10;
        }

        this.itens = [];
    }

    public load(data : any): void {
        this.pagina = data.pagina;
        this.limite = data.limite;
        this.total = data.total;
        this.itens = [...data.itens];
    }

    public next() : void {
        if((this.pagina == 0 ? 1 : this.pagina) * this.limite < this.total) {
            this.pagina++;
        }
    }

    public previous() : void {
        if(this.pagina > 0) {
            this.pagina--;
        }
    }

    public clear() : void {
        this.pagina = 0;
        this.itens = [];
    }
}
