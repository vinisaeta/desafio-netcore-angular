import { Auth } from '../../../@shared/security/auth.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'i-navbar',
    templateUrl: './i-navbar.component.html',
    styleUrls: ['./i-navbar.component.scss']
})
export class INavbarComponent {

    @Output() menu : EventEmitter<any> = new EventEmitter();

    constructor(private auth: Auth, private router: Router) { }

    public sair(): void {
        this.auth.signOut().subscribe(result => {
            this.router.navigate(['login']);
        });
    }

    public abrirMenu() : void {
        this.menu.emit();
    }


}
