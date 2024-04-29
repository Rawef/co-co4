import { HomeModule } from './home/home.module';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { profile } from 'console';
import { PanierModule } from './panier/panier.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/component/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AboutusModule } from './aboutus/aboutus.module';
import { AuthConfig, OAuthModule } from 'angular-oauth2-oidc';
import { BackofficeModule } from './backoffice/backoffice.module';
import { ColocationModule } from './colocation/colocation.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ChatModule } from './chat/chat.module';
import { ShellComponent } from './shell/shell.component';


const config: SocketIoConfig = { url: 'http://localhost:8089 ', options: {} };



@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    PanierModule,
    FormsModule,
    HomeModule,
    LoginModule,
    CommonModule ,
    AboutusModule,
    ColocationModule,
    BackofficeModule,
    MessagesModule,
    ButtonModule,
    ChatModule,
    SocketIoModule.forRoot(config),
    OAuthModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    
    
     
    
    
    
    

  ],
  providers: [
    provideClientHydration(),
    
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
