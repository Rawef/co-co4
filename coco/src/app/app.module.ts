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
import { ServiceWorkerModule } from '@angular/service-worker';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ChatModule } from './chat/chat.module';
import { ShellComponent } from './shell/shell.component';
import { AnnonceColocListComponent } from './annoceColoc/annonce-coloc-list/annonce-coloc-list.component';
import { CreateAnnonceColocComponent } from './annoceColoc/create-annonce-coloc/create-annonce-coloc.component';
import { MesAnnoncesComponent } from './annoceColoc/mes-annonces/mes-annonces.component';
import { AnnoceColocViewComponent } from './annoceColoc/annoce-coloc-view/annoce-coloc-view.component';
import { UpdateAnnonceColocComponent } from './annoceColoc/update-annonce-coloc/update-annonce-coloc.component';
import { CreateReservationColocComponent } from './reservation/create-reservation-coloc/create-reservation-coloc.component';
import { CovoiturageModule } from './covoiturage/covoiturage.module';


const config: SocketIoConfig = { url: 'http://localhost:8089 ', options: {} };



@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    AnnonceColocListComponent,
    CreateAnnonceColocComponent,
    MesAnnoncesComponent,
    AnnoceColocViewComponent,
    UpdateAnnonceColocComponent,
    CreateReservationColocComponent,
    
    
    
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
    BackofficeModule,
    MessagesModule,
    CovoiturageModule,

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
