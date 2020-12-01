import { Component, OnInit, Input } from "@angular/core";

export enum LabelPosition {
    Left = 'left',
    Top = 'top'
}

@Component({
    selector: "i-form-field",
    templateUrl: "./i-form-field.component.html",
    styleUrls: ["./i-form-field.component.scss"]
})
export class FormFieldComponent implements OnInit {

    @Input() label: string = "Label";
    @Input() mandatory: boolean = false;
    @Input() position: LabelPosition = LabelPosition.Top;

    constructor() {}

    ngOnInit() {}
}
