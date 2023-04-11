import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showMedecinBoard = false;
  showClientBoard = false;
  username?: string;

  constructor(private storageService: StorageService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showClientBoard = this.roles.includes('ROLE_CLIENT');
      this.showMedecinBoard = this.roles.includes('ROLE_MEDECIN');


      this.username = user.username;
    }
  }

  logout(): void {

    this.storageService.signOut();
    this.router.navigate(['/login']);
    this.showAdminBoard = false;
    this.showClientBoard = false;
    this.showMedecinBoard = false;
    this.isLoggedIn =false;
    this.authService.logout().subscribe({
      next: res => {
        this.storageService.clean();
        this.router.navigate(['/login']);
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
