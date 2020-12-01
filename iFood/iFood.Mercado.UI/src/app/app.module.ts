import { LayoutModule } from './layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/pages/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { ProdutoModule } from './produtos/produto.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { AuthGuard } from './@shared/security';
import { IFoodErrorHandler } from './@shared/exception/error.handler';
import {NgxNotificationMsgModule} from 'ngx-notification-msg'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LoginModule,
        LayoutModule,
        ProdutoModule,
        LoadingBarHttpClientModule,
        LoadingBarRouterModule,
        LoadingBarModule,
        NgxNotificationMsgModule

    ],
    providers: [
        { provide: ErrorHandler, useClass: IFoodErrorHandler },
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
