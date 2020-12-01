import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "i-error",
    template: `
        <ng-content
            *ngIf="control.invalid && (control.dirty || control.touched)"
        >
        </ng-content>
    `
})
export class ErrorComponent implements OnInit {

    @Input() control: any;

    constructor() {}

    ngOnInit() {}
}
