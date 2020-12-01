import { Router } from '@angular/router';
import { Auth } from '../../@shared/security';
import { Component } from '@angular/core';

@Component({
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

    constructor(private auth: Auth, private router: Router) { }

    public sair(): void {
        this.auth.signOut().subscribe(result => {
            this.router.navigate(['login']);
        });
    }

}
