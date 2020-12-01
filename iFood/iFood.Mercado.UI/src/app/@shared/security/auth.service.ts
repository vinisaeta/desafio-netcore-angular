import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})
export class Auth {

    constructor(private http : HttpClient) {}

    public signIn(login : string, senha: string) : Observable<any> {
        return this.http.post<any>(environment.auth + "login",'{}',{headers: {"Authorization": `Basic ${login}:${senha}`}})
                        .pipe(
                            tap(result => {
                                if(result.success){
                                    localStorage.setItem(environment.token, new Date().valueOf().toString());
                                } else {
                                    throw new Error(result.error);
                                }
                            })
                        );
    }

    public isLogged() : boolean {
        return localStorage.getItem(environment.token) != null;
    }

    public signOut() : Observable<any> {
        localStorage.removeItem(environment.token);
        return of(true);
    }

}
