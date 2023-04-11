import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  
  form: any = {
    username: "",
    email: "",
    name: "",
    gender: "homme",
    address: "Ariana",
    age: 0,
    experience: 0,
    specialite: "",
    password: "",
    confirme: "",
    roles: []
  };

  //
  isSuivant_patient: boolean = false;
  isSuivant_medecin: boolean = false;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  specialites = [  'Anesthésiologie',  'Cardiologie',  'Chirurgie générale',  'Dermatologie',  'Endocrinologie',  'Gastroentérologie',  'Gynécologie-Obstétrique',  'Hématologie',  'Maladies infectieuses',  'Médecine interne',  'Néphrologie',  'Neurologie',  'Oncologie',  'Ophtalmologie',  'Orthopédie',  'Oto-rhino-laryngologie (ORL)',  'Pédiatrie',  'Pneumologie',  'Psychiatrie',  'Radiologie',  'Rhumatologie',  'Médecine du sport',  'Médecine du travail',  'Médecine d\'urgence',  'Médecine légale'];

  provinces = ["Ariana","Ben Arous","Béja","Bizerte","Jendouba","Kairouan","Kasserine","Kébil","Gabès","Gafsa","Mahdia","Manouba","Mèdenine","Monastir","Nabeul","Sidi Bouzid","Siliana","Sfax","Tataouine","Tozeur","Tunis"];

  constructor(private authService: AuthService, private router: Router) {
   }

  ngOnInit(): void {
  }

  clickSuivant_patient(){
    this.isSuivant_patient = true;
  }

  clickSuivant_medecin(){
    this.isSuivant_medecin = true;
  }

  onSubmit_patient(): void {

    if (this.form.password !== this.form.confirme) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    const data = {
      username: this.form.username.toString(),
      email: this.form.email,
      name: this.form.name,
      address: this.form.address,
      gender: this.form.gender,
      age: this.form.age,
      password: this.form.password,
      roles: ["client"]
    };

    this.authService.register_patient(data).subscribe({
      next: data1 => {
        alert("Inscription patient avec succés");
        this.router.navigate(['/login']);
        this.isSignUpFailed = false;

      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  onSubmit_medecin(): void {

    if (this.form.password !== this.form.confirme) {
      alert("Les mots de passe ne correspondent pas");
      return;
      }

    const data = {
      username: this.form.username.toString(),
      email: this.form.email,
      name: this.form.name,
      address: this.form.address,
      gender: this.form.gender,
      age: this.form.age,
      experience: this.form.experience,
      specialite: this.form.specialite,
      password: this.form.password,
      roles: ["medecin"]
    };

    console.log(data)

    this.authService.register_medecin(data).subscribe({
      next: data => {
        alert("Inscription medecin avec succés");
        this.router.navigate(['/login']);
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  clear(form: NgForm): void{
    form.reset();
    this.isSuivant_medecin = false;
    this.isSuivant_patient = false;
    this.form = {
      username: "",
      email: "",
      name: "",
      gender: "homme",
      address: "Ariana",
      age: 0,
      experience: 0,
      specialite: "",
      password: "",
      confirme: "",
      roles: []
    };
  }

  onReset(form: NgForm): void {
    form.reset();
    this.form = {
      username: "",
      email: "",
      name: "",
      gender: "homme",
      address: "Ariana",
      age: 0,
      experience: 0,
      specialite: "",
      password: "",
      confirme: "",
      roles: []
    };
  }

}