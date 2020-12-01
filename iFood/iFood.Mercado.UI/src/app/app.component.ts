import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ifood',
  template: '<ngx-loading-bar color="#ea1d2c" height="6px" [includeSpinner]="false"></ngx-loading-bar><router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

    constructor(
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.registerIcon('search', 'search.svg');
        this.registerIcon('signout', 'signout.svg');
        this.registerIcon('remove', 'remove.svg');
        this.registerIcon('exit', 'exit.svg');
        this.registerIcon('trash', 'trash.svg');
        this.registerIcon('market', 'market.svg');
        this.registerIcon('image', 'image.svg');
    }

    private registerIcon(name: string, fileName : string) : void {
        this.iconRegistry.addSvgIcon(name, this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/img/icons/${fileName}`));
    }
}
