import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'i-header',
  templateUrl: './i-header.component.html',
  styleUrls: ['./i-header.component.scss']
})
export class IHeaderComponent implements OnInit {

    @Input() icon: string = 'none';
    @Input() title: string = "Título";

    constructor() { }

    ngOnInit() {
    }


}
