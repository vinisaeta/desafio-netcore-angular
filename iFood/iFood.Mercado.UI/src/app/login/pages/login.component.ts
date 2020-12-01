import { Auth } from '../../@shared/security/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public usuario: any = {
        login: '11234567890',
        senha: '09876543211'
    };

    constructor(private auth: Auth, private router: Router) { }

    ngOnInit(): void {
        if(this.auth.isLogged()){
            this.router.navigate(['app/produtos']);
        }
    }

    public entrar(): void {
        this.auth.signIn(this.usuario.login, this.usuario.senha).subscribe(result => {
            this.router.navigate(['app/produtos']);
        });
    }

}
