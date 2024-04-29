import { StatsComponent } from './aboutus/components/stats/stats.component';

import { LoginComponent } from './login/component/login/login.component';
import { PanierComponent } from './panier/component/panier/panier.component';
import { HomeComponent } from './home/component/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { PreferancesComponent } from './login/component/preferances/preferances.component';
import { ProfileComponent } from './login/component/profile/profile.component';
import { UpdateComponent } from './login/component/update/update.component';
import { SetPasswordComponent } from './login/component/set-password/set-password.component';
import { DashboardComponent } from './backoffice/components/dashboard/dashboard.component';
import { ChatComponent } from './chat/components/chat/chat.component';
import { AnnonceColocListComponent } from './annoceColoc/annonce-coloc-list/annonce-coloc-list.component';
import { CreateAnnonceColocComponent } from './annoceColoc/create-annonce-coloc/create-annonce-coloc.component';
import { MesAnnoncesComponent } from './annoceColoc/mes-annonces/mes-annonces.component';
import { AnnoceColocViewComponent } from './annoceColoc/annoce-coloc-view/annoce-coloc-view.component';
import { UpdateAnnonceColocComponent } from './annoceColoc/update-annonce-coloc/update-annonce-coloc.component';
import { CreateReservationColocComponent } from './reservation/create-reservation-coloc/create-reservation-coloc.component';
  //MaddouriCovoiturage
  import { AnnonceComponent } from './covoiturage/components/annonce/annonce.component';
import { VoitureComponent } from './covoiturage/components/voiture/voiture.component';
import { AjoutervoitureComponent } from './covoiturage/components/ajoutervoiture/ajoutervoiture.component';
import { AjouterannonceComponent } from './covoiturage/components/ajouterannonce/ajouterannonce.component';
import { DetailedAnnonceComponent } from './covoiturage/components/detailed-annonce/detailed-annonce.component';
import { MesannoncesComponent } from './covoiturage/components/mesannonces/mesannonces.component';
import { ReservationComponent } from './covoiturage/components/reservation/reservation.component';
import { BackannonceComponent } from './covoiturage/components/backannonce/backannonce.component';
import { BackupdateannonceComponent } from './covoiturage/components/backupdateannonce/backupdateannonce.component';
import { UpdateannonceComponent } from './covoiturage/components/updateannonce/updateannonce.component';
import { UpdatevoitureComponent } from './covoiturage/components/updatevoiture/updatevoiture.component';
import { StatComponent } from './covoiturage/components/stat/stat.component';
import { BackreservationComponent } from './covoiturage/components/backreservation/backreservation.component';
import { BackvoitureComponent } from './covoiturage/components/backvoiture/backvoiture.component';
import { BackupdatevoitureComponent } from './covoiturage/components/backupdatevoiture/backupdatevoiture.component';
import { BackcommentComponent } from './covoiturage/components/backcomment/backcomment.component';
import { NotificationComponent } from './covoiturage/components/notification/notification.component';
import { StatisComponent } from './covoiturage/components/statis/statis.component';
import { DashboardsComponent } from './covoiturage/components/dashboards/dashboards.component';

const routes: Routes = [

  {path:"home" , component:HomeComponent},
  {path:"panier" , component:PanierComponent},
  {path:"profile" , component:ProfileComponent},
  {path:"update" , component:UpdateComponent},
  {path:"password" , component:SetPasswordComponent},
  {path:"back" , component:DashboardComponent},
  {path:"backk" , component:DashboardsComponent},
  {path:"login" , component:LoginComponent},
  { path: 'chat/:userId', component: ChatComponent },
  { path: "annoncesColoc", component: AnnonceColocListComponent }, 
  { path: "annoncesColoc/add", component: CreateAnnonceColocComponent }, 
  { path: "annoncesColoc/mesannonces", component: MesAnnoncesComponent }, 
  { path: "annoncesColoc/view/:id", component: AnnoceColocViewComponent }, 
  { path: "annoncesColoc/:id", component: UpdateAnnonceColocComponent }, 
  { path: "annoncesColoc/view/:id/reservationColoc", component: CreateReservationColocComponent },


  //MaddouriCovoiturage
  {path:"annonceCOV" , component:AnnonceComponent},
  {path:"voiture" , component:VoitureComponent},
  {path:"ajoutervoiture" , component:AjoutervoitureComponent},
  {path:"ajouterannonce" , component:AjouterannonceComponent},
  { path: 'annonces/:ida', component: DetailedAnnonceComponent },
  { path: "annonces", component: MesannoncesComponent },
  { path: "mesReservations", component: ReservationComponent },
  { path: "bannonce", component: BackannonceComponent },
  { path: "bupdate/:ida", component: BackupdateannonceComponent },
  { path: "updatevoiture/:idv", component:UpdatevoitureComponent  },   
  { path: "updateannonce/:ida", component:UpdateannonceComponent     },
  { path: "stats", component:StatComponent},                    
  { path: "reserv", component:BackreservationComponent},     
  { path: "bvoiture", component:BackvoitureComponent},                    
  { path: "buvoiture/:idv", component:BackupdatevoitureComponent},   
  { path: "bcomment", component:BackcommentComponent},                 
  { path: "not", component:NotificationComponent},                    
  { path: "stat", component:StatisComponent},    

  {path:"aboutus" , component:StatsComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:"preferances" , component:PreferancesComponent},
  //{path:"**",redirectTo:"home" ,pathMatch:"full"} 

  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
