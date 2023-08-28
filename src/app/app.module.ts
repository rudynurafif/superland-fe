import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/component/footer/footer.component';
import { VerificationComponent } from './verification/verification.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthInterceptor } from './auth/interceptor/auth.interceptor';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        FooterComponent,
        VerificationComponent,
        LandingPageComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
        }
    ],
    exports: [
        FooterComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
