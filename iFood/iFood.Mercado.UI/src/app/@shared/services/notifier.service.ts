import { Injectable } from '@angular/core';
import {NgxNotificationDirection, NgxNotificationMsgService, NgxNotificationStatusMsg} from 'ngx-notification-msg';


 @Injectable({
     providedIn: 'root'
 })
 export class Notifier {

    constructor(private notifier: NgxNotificationMsgService) { }

    /**
     * Lança uma mensagem de sucesso;
     *
     * @param message : mensagem a ser exibida
     */
    public success(message : string) : void {
        this.notifier.open({
            status: NgxNotificationStatusMsg.SUCCESS,
            header: 'Sucesso',
            messages: [message],
            direction: NgxNotificationDirection.BOTTOM_RIGHT
         });
    }

    /**
     * Lança uma mensagem de sucesso;
     *
     * @param message : mensagem a ser exibida
     */
    public info(message : string) : void {
        this.notifier.open({
            status: NgxNotificationStatusMsg.INFO,
            header: 'Atenção',
            messages: [message],
            direction: NgxNotificationDirection.TOP_RIGHT
         });
    }

    /**
     * Lança uma mensagem de erro;
     *
     * @param message : mensagem a ser exibida
     */
    public error(message : string) : void {
        this.notifier.open({
            status: NgxNotificationStatusMsg.FAILURE,
            header: 'Erro',
            messages: [message],
            direction: NgxNotificationDirection.TOP_RIGHT
         });
    }

    /**
     * Lança uma mensagem de alerta;
     *
     * @param message : mensagem a ser exibida
     */
    public warning(message : string) : void {
        this.notifier.open({
            status: NgxNotificationStatusMsg.NONE,
            header: 'Informação',
            messages: [message],
            direction: NgxNotificationDirection.TOP_RIGHT
         });
    }

 }
