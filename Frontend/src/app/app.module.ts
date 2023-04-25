import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { httpInterceptorProviders } from './_helpers/http.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_auth/login/login.component';
import { RegisterComponent } from './_auth/register/register.component';
import { HomeComponent } from './_pages/home/home.component';
import { ProfileComponent } from './_pages/profile/profile.component';
import { BoardAdminComponent } from './_pages/board/board-admin/board-admin.component';
import { BoardUserComponent } from './_pages/board/board-user/board-user.component';
import { BoardClientComponent } from './_pages/board/board-client/board-client.component';
import { FooterComponent } from './_component/footer/footer.component';
import { SpinnerComponent } from './_component/spinner/spinner.component';
import { HeaderComponent } from './_component/header/header.component';
import { PasswordChangeComponent } from './_pages/profile/password-change/password-change.component';
import { NotificationComponent } from './_pages/profile/notification/notification.component';
import { BoardMedecinComponent } from './_pages/board/board-medecin/board-medecin.component';
import { ErreurComponent } from './_component/erreur/erreur.component';
import { ListMedecinComponent } from './_pages/board/board-client/list-medecin/list-medecin.component';
import { ListAdvicesComponent } from './_pages/board/board-client/list-advices/list-advices.component';
import { CantacterComponent } from './_pages/board/board-client/cantacter/cantacter.component';
import { ListReclamationsComponent } from './_pages/board/board-client/list-reclamations/list-reclamations.component';
import { UserNamePipe } from './_pipes/user/user-name.pipe';
import { UserAddressPipe } from './_pipes/user/user-address.pipe';
import { UserNotePipe } from './_pipes/user/user-note.pipe';
import { UserSpecialtePipe } from './_pipes/user/user-specialte.pipe';
import { AdviceDatePipe } from './_pipes/advice/advice-date.pipe';
import { AdviceEtatPipe } from './_pipes/advice/advice-etat.pipe';
import { SpinnerDirective } from './_shared/spinner.directive';
import { CabinetComponent } from './_pages/board/board-medecin/cabinet/cabinet.component';
import { ListConseilsComponent } from './_pages/board/board-medecin/list-conseils/list-conseils.component';
import { ListDiagnosticComponent } from './_pages/board/board-client/list-diagnostic/list-diagnostic.component';



@NgModule({
  declarations: [
    SpinnerDirective,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardClientComponent,
    FooterComponent,
    SpinnerComponent,
    HeaderComponent,
    PasswordChangeComponent,
    NotificationComponent,
    BoardMedecinComponent,
    ErreurComponent,
    ListMedecinComponent,
    ListAdvicesComponent,
    CantacterComponent,
    ListReclamationsComponent,
    UserNamePipe,
    UserAddressPipe,
    UserNotePipe,
    UserSpecialtePipe,
    AdviceDatePipe,
    AdviceEtatPipe,
    CabinetComponent,
    ListConseilsComponent,
    ListDiagnosticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
