import { Component, OnInit } from '@angular/core';
import { CabinetService } from 'src/app/_services/cabinet/cabinet.service';
import { StorageService } from 'src/app/_services/storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-list-medecin',
  templateUrl: './list-medecin.component.html',
  styleUrls: ['./list-medecin.component.css']
})
export class ListMedecinComponent implements OnInit{

  specialites = [  'Anesthésiologie',  'Cardiologie',  'Chirurgie générale',  'Dermatologie',  'Endocrinologie',  'Gastroentérologie',  'Gynécologie-Obstétrique',  'Hématologie',  'Maladies infectieuses',  'Médecine interne',  'Néphrologie',  'Neurologie',  'Oncologie',  'Ophtalmologie',  'Orthopédie',  'Oto-rhino-laryngologie (ORL)',  'Pédiatrie',  'Pneumologie',  'Psychiatrie',  'Radiologie',  'Rhumatologie',  'Médecine du sport',  'Médecine du travail',  'Médecine d\'urgence',  'Médecine légale'];
  provinces = ["Ariana","Ben Arous","Béja","Bizerte","Jendouba","Kairouan","Kasserine","Kébil","Gabès","Gafsa","Mahdia","Manouba","Mèdenine","Monastir","Nabeul","Sidi Bouzid","Siliana","Sfax","Tataouine","Tozeur","Tunis"];
  loading: boolean = true;

  currentUser: any = null;
  medecins: any = [];
  medecinSelect: any = [];
  cabinet: any = null; 

  addressE : string = "";
  specialiteE : string = "Anesthésiologie";
  nameE : string = "";
  noteE : string = "";

  constructor(
    private userService: UserService,
    private cabinetService: CabinetService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    if(this.currentUser != null){
      this.addressE = this.currentUser.address;
    }
    this.retriveMedecins();

  }
  
  retriveMedecins(): void {
    this.userService.getAll()
    .subscribe(
      data => {
        for(let x in data){

          if(data[x].specialite != null){
            this.medecins.push(data[x])
          }
          this.loading = false;
        }
      },
      error => {
        console.log(error.message);
      }
    )  
  }

    
  reloadPage(): void {
    window.location.reload();
  }

  voirCabinet(medecin: any): void{
    this.medecinSelect = medecin

    this.cabinetService.getByMedecin(medecin.id)
    .subscribe(
      data => {
        this.cabinet = data;
        
      },
      error => {
        this.cabinet = null;
        console.log(error.message);
      }
    ) 
  }

}
