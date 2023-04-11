import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_pages/home/home.component';
import { LoginComponent } from './_auth/login/login.component';
import { RegisterComponent } from './_auth/register/register.component';
import { ProfileComponent } from './_pages/profile/profile.component';
import { BoardUserComponent } from './_pages/board/board-user/board-user.component';
import { BoardClientComponent } from './_pages/board/board-client/board-client.component';
import { BoardAdminComponent } from './_pages/board/board-admin/board-admin.component';
import { NotificationComponent } from './_pages/profile/notification/notification.component';
import { PasswordChangeComponent } from './_pages/profile/password-change/password-change.component';
import { BoardMedecinComponent } from './_pages/board/board-medecin/board-medecin.component';
import { ListAdvicesComponent } from './_pages/board/board-client/list-advices/list-advices.component';
import { ListMedecinComponent } from './_pages/board/board-client/list-medecin/list-medecin.component';
import { CantacterComponent } from './_pages/board/board-client/cantacter/cantacter.component';
import { ListReclamationsComponent } from './_pages/board/board-client/list-reclamations/list-reclamations.component';
import { CabinetComponent } from './_pages/board/board-medecin/cabinet/cabinet.component';
import { ListConseilsComponent } from './_pages/board/board-medecin/list-conseils/list-conseils.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cantacter', component: CantacterComponent},
  //Provile bar
  { path: 'profile', component: ProfileComponent },
  { path: 'securite', component: PasswordChangeComponent },
  { path: 'avis', component: NotificationComponent },  
  //Board
  { path: 'user', component: BoardUserComponent },
  { path: 'board/medecin', component: BoardMedecinComponent },
  { path: 'board/patient', component: BoardClientComponent},
  { path: 'admin', component: BoardAdminComponent },
  // Board patient
  { path: 'advices', component: ListAdvicesComponent },
  { path: 'medecins', component: ListMedecinComponent },
  { path: 'reclamations', component: ListReclamationsComponent},
  // Board medecin
  { path: 'cabinet', component: CabinetComponent },
  { path: 'conseils', component: ListConseilsComponent },
  //
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }