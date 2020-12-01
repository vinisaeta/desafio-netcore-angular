import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IfStmt } from '@angular/compiler';

@Injectable({
    providedIn: "root"
})
export class ProdutoService {

    constructor(private http : HttpClient) {}

    public pesquisar(nome : string, pagina : number, limite: number) : Observable<any> {

        let httpParams = new HttpParams();

        if(nome) httpParams = httpParams.append('nome', nome);
        if(pagina) httpParams = httpParams.append('pagina', pagina.toString());
        if(limite) httpParams = httpParams.append('limite', limite.toString());


        return this.http.get<any>(environment.api + "produto", {params : httpParams});
    }

    public obter(id : string) : Observable<any> {
        return this.http.get<any>(environment.api + "produto/" + id);
    }

    public adicionar(produto : any) : Observable<any> {
        return this.http.post<any>(environment.api + "produto", produto);
    }

    public alterar(produto : any) : Observable<any> {
        return this.http.put<any>(environment.api + "produto", produto);
    }

    public remover(produto : any) : Observable<any> {
        return this.http.delete<any>(environment.api  + "produto/" + produto.id);
    }

}
