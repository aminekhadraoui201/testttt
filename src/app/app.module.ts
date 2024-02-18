import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddComponent } from './test/add/add.component';
import { UpdateComponent } from './test/update/update.component';
import { DeleteComponent } from './test/delete/delete.component';
import { ListComponent } from './test/list/list.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdduserComponent } from './user/adduser/adduser.component';
import { ListuserComponent } from './user/listuser/listuser.component';
import { DeleteuserComponent } from './user/deleteuser/deleteuser.component';
import { UpdateuserComponent } from './user/updateuser/updateuser.component';
import { AddreclamationComponent } from './reclamation/addreclamation/addreclamation.component';
import { DeletereclamationComponent } from './reclamation/deletereclamation/deletereclamation.component';
import { ListreclamationComponent } from './reclamation/listreclamation/listreclamation.component';
import { UpdatereclamationComponent } from './reclamation/updatereclamation/updatereclamation.component';
import { AddquestionnaireComponent } from './questionnaire/addquestionnaire/addquestionnaire.component';
import { UpdatequestionnaireComponent } from './questionnaire/updatequestionnaire/updatequestionnaire.component';
import { ListquestionnaireComponent } from './questionnaire/listquestionnaire/listquestionnaire.component';
import { DeletequestionnaireComponent } from './questionnaire/deletequestionnaire/deletequestionnaire.component';
import { AddreponseComponent } from './reponse/addreponse/addreponse.component';
import { ListreponseComponent } from './reponse/listreponse/listreponse.component';
import { DeletereponseComponent } from './reponse/deletereponse/deletereponse.component';
import { UpdatereponseComponent } from './reponse/updatereponse/updatereponse.component';
import { AddoffreComponent } from './offre/addoffre/addoffre.component';
import { ListoffreComponent } from './offre/listoffre/listoffre.component';
import { UpdateoffreComponent } from './offre/updateoffre/updateoffre.component';
import { DeleteoffreComponent } from './offre/deleteoffre/deleteoffre.component';
import { DeletestageComponent } from './stage/deletestage/deletestage.component';
import { AddstageComponent } from './stage/addstage/addstage.component';
import { UpdatestageComponent } from './stage/updatestage/updatestage.component';
import { ListstageComponent } from './stage/liststage/liststage.component';
import { ListapplicationComponent } from './application/listapplication/listapplication.component';
import { AddapplicationComponent } from './application/addapplication/addapplication.component';
import { UpdateapplicationComponent } from './application/updateapplication/updateapplication.component';
import { DeleteapplicationComponent } from './application/deleteapplication/deleteapplication.component';
import { AddchatComponent } from './chat/addchat/addchat.component';
import { UpdatechatComponent } from './chat/updatechat/updatechat.component';
import { ListchatComponent } from './chat/listchat/listchat.component';
import { DeletechatComponent } from './chat/deletechat/deletechat.component';
import { AddcommentaireComponent } from './commentaire/addcommentaire/addcommentaire.component';
import { ListcommentaireComponent } from './commentaire/listcommentaire/listcommentaire.component';
import { UpdatecommentaireComponent } from './commentaire/updatecommentaire/updatecommentaire.component';
import { DeletecommentaireComponent } from './commentaire/deletecommentaire/deletecommentaire.component';
import { DeletecommentairePostComponent } from './commentaire-post/deletecommentaire-post/deletecommentaire-post.component';
import { ListcommentairePostComponent } from './commentaire-post/listcommentaire-post/listcommentaire-post.component';
import { UpdatecommentairePostComponent } from './commentaire-post/updatecommentaire-post/updatecommentaire-post.component';
import { AddcommentairePostComponent } from './commentaire-post/addcommentaire-post/addcommentaire-post.component';
import { AddcompetanceComponent } from './competance/addcompetance/addcompetance.component';
import { ListcompetanceComponent } from './competance/listcompetance/listcompetance.component';
import { UpdatecompetanceComponent } from './competance/updatecompetance/updatecompetance.component';
import { DeletecompetanceComponent } from './competance/deletecompetance/deletecompetance.component';
import { AdddepotComponent } from './depot/adddepot/adddepot.component';
import { ListdepotComponent } from './depot/listdepot/listdepot.component';
import { UpdatedepotComponent } from './depot/updatedepot/updatedepot.component';
import { DeletedepotComponent } from './depot/deletedepot/deletedepot.component';
import { AddencadrementComponent } from './encadrement/addencadrement/addencadrement.component';
import { ListencadrementComponent } from './encadrement/listencadrement/listencadrement.component';
import { UpdateencadrementComponent } from './encadrement/updateencadrement/updateencadrement.component';
import { DeleteencadrementComponent } from './encadrement/deleteencadrement/deleteencadrement.component';
import { AddetiquetteComponent } from './etiquette/addetiquette/addetiquette.component';
import { ListetiquetteComponent } from './etiquette/listetiquette/listetiquette.component';
import { UpdateetiquetteComponent } from './etiquette/updateetiquette/updateetiquette.component';
import { DeleteetiquetteComponent } from './etiquette/deleteetiquette/deleteetiquette.component';
import { AddevaluationComponent } from './evaluation/addevaluation/addevaluation.component';
import { ListevaluationComponent } from './evaluation/listevaluation/listevaluation.component';
import { UpdateevaluationComponent } from './evaluation/updateevaluation/updateevaluation.component';
import { DeleteevaluationComponent } from './evaluation/deleteevaluation/deleteevaluation.component';
import { AddeventComponent } from './event/addevent/addevent.component';
import { ListeventComponent } from './event/listevent/listevent.component';
import { UpdateeventComponent } from './event/updateevent/updateevent.component';
import { DeleteeventComponent } from './event/deleteevent/deleteevent.component';
import { AddformationComponent } from './formation/addformation/addformation.component';
import { ListformationComponent } from './formation/listformation/listformation.component';
import { UpdateformationComponent } from './formation/updateformation/updateformation.component';
import { DeleteformationComponent } from './formation/deleteformation/deleteformation.component';
import { AddinteractionComponent } from './interaction/addinteraction/addinteraction.component';
import { ListinteractionComponent } from './interaction/listinteraction/listinteraction.component';
import { UpdateinteractionComponent } from './interaction/updateinteraction/updateinteraction.component';
import { DeleteinteractionComponent } from './interaction/deleteinteraction/deleteinteraction.component';
import { AddlogistiquesComponent } from './logistiques/addlogistiques/addlogistiques.component';
import { ListlogistiquesComponent } from './logistiques/listlogistiques/listlogistiques.component';
import { UpdatelogistiquesComponent } from './logistiques/updatelogistiques/updatelogistiques.component';
import { DeletelogistiquesComponent } from './logistiques/deletelogistiques/deletelogistiques.component';
import { AddmessageComponent } from './message/addmessage/addmessage.component';
import { ListmessageComponent } from './message/listmessage/listmessage.component';
import { UpdatemessageComponent } from './message/updatemessage/updatemessage.component';
import { DeletemessageComponent } from './message/deletemessage/deletemessage.component';
import { AddocteamComponent } from './octeam/addocteam/addocteam.component';
import { ListocteamComponent } from './octeam/listocteam/listocteam.component';
import { UpdateocteamComponent } from './octeam/updateocteam/updateocteam.component';
import { DeleteocteamComponent } from './octeam/deleteocteam/deleteocteam.component';
import { AddpointageComponent } from './pointage/addpointage/addpointage.component';
import { ListpointageComponent } from './pointage/listpointage/listpointage.component';
import { UpdatepointageComponent } from './pointage/updatepointage/updatepointage.component';
import { DeletepointageComponent } from './pointage/deletepointage/deletepointage.component';
import { AddpostComponent } from './post/addpost/addpost.component';
import { ListpostComponent } from './post/listpost/listpost.component';
import { UpdatepostComponent } from './post/updatepost/updatepost.component';
import { DeletepostComponent } from './post/deletepost/deletepost.component';
import { AddrateComponent } from './rate/addrate/addrate.component';
import { ListrateComponent } from './rate/listrate/listrate.component';
import { UpdaterateComponent } from './rate/updaterate/updaterate.component';
import { DeleterateComponent } from './rate/deleterate/deleterate.component';
import { AddsessionEventComponent } from './session-event/addsession-event/addsession-event.component';
import { ListsessionEventComponent } from './session-event/listsession-event/listsession-event.component';
import { UpdatesessionEventComponent } from './session-event/updatesession-event/updatesession-event.component';
import { DeletesessionEventComponent } from './session-event/deletesession-event/deletesession-event.component';
import { AddtacheComponent } from './tache/addtache/addtache.component';
import { ListtacheComponent } from './tache/listtache/listtache.component';
import { UpdatetacheComponent } from './tache/updatetache/updatetache.component';
import { DeletetacheComponent } from './tache/deletetache/deletetache.component';
import { HomeComponent } from './shared/home/home.component';
import { AccueilComponent } from './shared/accueil/accueil.component';
import { FooterComponent } from './back/components/footer/footer.component';
import { NavbarComponent } from './back/components/navbar/navbar.component';
import { SidebarComponent } from './back/components/sidebar/sidebar.component';
import { AdminLayoutComponent } from './back/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './back/layouts/auth-layout/auth-layout.component';
import { ComponentsModule } from './back/components/components.module';
import { DashboardComponent } from './back/pages/dashboard/dashboard.component';
import { ReclamationComponent } from './back/pages/reclamation/reclamation.component';
import { AdminLayout1Component } from './front/layouts/admin-layout1/admin-layout1.component';
import { NavbarfrontComponent } from './front/components/navbarfront/navbarfront.component';
import { FooterfrontComponent } from './front/components/footerfront/footerfront.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    UpdateComponent,
    DeleteComponent,
    ListComponent,
    AdduserComponent,
    ListuserComponent,
    DeleteuserComponent,
    UpdateuserComponent,
    AddreclamationComponent,
    DeletereclamationComponent,
    ListreclamationComponent,
    UpdatereclamationComponent,
    AddquestionnaireComponent,
    UpdatequestionnaireComponent,
    ListquestionnaireComponent,
    DeletequestionnaireComponent,
    AddreponseComponent,
    ListreponseComponent,
    DeletereponseComponent,
    UpdatereponseComponent,
    AddoffreComponent,
    ListoffreComponent,
    UpdateoffreComponent,
    DeleteoffreComponent,
    DeletestageComponent,
    AddstageComponent,
    UpdatestageComponent,
    ListstageComponent,
    ListapplicationComponent,
    AddapplicationComponent,
    UpdateapplicationComponent,
    DeleteapplicationComponent,
    AddchatComponent,
    UpdatechatComponent,
    ListchatComponent,
    DeletechatComponent,
    AddcommentaireComponent,
    ListcommentaireComponent,
    UpdatecommentaireComponent,
    DeletecommentaireComponent,
    DeletecommentairePostComponent,
    ListcommentairePostComponent,
    UpdatecommentairePostComponent,
    AddcommentairePostComponent,
    AddcompetanceComponent,
    ListcompetanceComponent,
    UpdatecompetanceComponent,
    DeletecompetanceComponent,
    AdddepotComponent,
    ListdepotComponent,
    UpdatedepotComponent,
    DeletedepotComponent,
    AddencadrementComponent,
    ListencadrementComponent,
    UpdateencadrementComponent,
    DeleteencadrementComponent,
    AddetiquetteComponent,
    ListetiquetteComponent,
    UpdateetiquetteComponent,
    DeleteetiquetteComponent,
    AddevaluationComponent,
    ListevaluationComponent,
    UpdateevaluationComponent,
    DeleteevaluationComponent,
    AddeventComponent,
    ListeventComponent,
    UpdateeventComponent,
    DeleteeventComponent,
    AddformationComponent,
    ListformationComponent,
    UpdateformationComponent,
    DeleteformationComponent,
    AddinteractionComponent,
    ListinteractionComponent,
    UpdateinteractionComponent,
    DeleteinteractionComponent,
    AddlogistiquesComponent,
    ListlogistiquesComponent,
    UpdatelogistiquesComponent,
    DeletelogistiquesComponent,
    AddmessageComponent,
    ListmessageComponent,
    UpdatemessageComponent,
    DeletemessageComponent,
    AddocteamComponent,
    ListocteamComponent,
    UpdateocteamComponent,
    DeleteocteamComponent,
    AddpointageComponent,
    ListpointageComponent,
    UpdatepointageComponent,
    DeletepointageComponent,
    AddpostComponent,
    ListpostComponent,
    UpdatepostComponent,
    DeletepostComponent,
    AddrateComponent,
    ListrateComponent,
    UpdaterateComponent,
    DeleterateComponent,
    AddsessionEventComponent,
    ListsessionEventComponent,
    UpdatesessionEventComponent,
    DeletesessionEventComponent,
    AddtacheComponent,
    ListtacheComponent,
    UpdatetacheComponent,
    DeletetacheComponent,
    
   
    HomeComponent,
    AccueilComponent,
    
    AdminLayoutComponent,
    AuthLayoutComponent,
    
    ReclamationComponent,
         AdminLayout1Component,
         NavbarfrontComponent,
         FooterfrontComponent,
       
         
    
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
