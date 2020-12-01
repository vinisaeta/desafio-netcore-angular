import { Component, OnInit, Input, Inject, forwardRef } from "@angular/core";
import { ErrorComponent } from "./i-error.component";
import { ValidationType, ValidationMessage } from "./i-error-validation";

@Component({
    selector: "i-error-message",
    template: `
        <div
            class="i-error-message"
            *ngIf="errors != null ? errors[type] : false">
            {{ message }}
        </div>
    `,
    styleUrls: ["./i-error-message.component.scss"]
})
export class ErrorMessageComponent {

    @Input() type: any;

    @Input() message: string = "Nenhuma mensagem foi informada";

    constructor(
        @Inject(forwardRef(() => ErrorComponent))
        public wrapper: ErrorComponent
    ) {}

    public get errors() {
        return this.wrapper.control.control.errors;
    }
}
