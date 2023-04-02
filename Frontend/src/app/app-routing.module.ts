import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_pages/home/home.component';
import { LoginComponent } from './_auth/login/login.component';
import { RegisterComponent } from './_auth/register/register.component';
import { ProfileComponent } from './_pages/profile/profile.component';
import { BoardUserComponent } from './_pages/board/board-user/board-user.component';
import { BoardClientComponent } from './_pages/board/board-client/board-client.component';
import { BoardAdminComponent } from './_pages/board/board-admin/board-admin.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'client', component: BoardClientComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }