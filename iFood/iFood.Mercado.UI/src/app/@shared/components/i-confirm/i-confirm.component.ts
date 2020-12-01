import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmTypes } from "./i-confirm-types";
import { Component, OnInit, Inject } from "@angular/core";

@Component({
    selector: "i-confirm",
    templateUrl: "./i-confirm.component.html",
    styleUrls: ["./i-confirm.component.scss"]
})
export class IConfirmComponent implements OnInit {
    public title: string;
    public message: string;
    public type: ConfirmTypes;
    public icon: string = 'none';
    public buttonYes: string = 'Confirmar';

    constructor(
        private dialogRef: MatDialogRef<IConfirmComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.title = data.title;
        this.message = data.message;
        this.type = data.type;
    }

    ngOnInit() {
        this.configureModal(this.type);
    }

    public onCancel() : void {
        this.dialogRef.close(false);
    }

    public onYes() : void {
        this.dialogRef.close(true);
    }

    private configureModal(type: ConfirmTypes): void {
        switch (type) {
            case ConfirmTypes.SignOut:
                 this.icon = "exit";
                 this.buttonYes = "Sair";
                 break;

            case ConfirmTypes.Remove:
                this.icon = "trash";
                this.buttonYes = "Remover";
                break;

            default:
                throw new Error("O ConfirmType informado não é compatível com as configurações atuais. Adicione esta cláusula nas configurações.");
        }
    }
}
