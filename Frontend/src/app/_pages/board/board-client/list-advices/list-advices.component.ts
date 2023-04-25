import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdviceService } from 'src/app/_services/advice/advice.service';
import { ReponseService } from 'src/app/_services/advice/reponse.service';
import { StorageService } from 'src/app/_services/storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-list-advices',
  templateUrl: './list-advices.component.html',
  styleUrls: ['./list-advices.component.css']
})
export class ListAdvicesComponent {

  loading: boolean = true;

  currentUser: any = null;

  conseils:any = [];
  medecins: any = [];
  reponseAdvice: any = null;

  addressE: string ="";

  form: any = {
    sujet: "",
    description: "",
    medecin: ""
  }

  constructor(
    private adviceService: AdviceService,
    private reponseService: ReponseService,
    private userService: UserService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    if(this.currentUser != null){
      this.addressE = "Ariana";
      this.retriveAdvices();
      this.retriveMedecins();
    }
  }

  retriveMedecins(): void {
    this.userService.getAll()
    .subscribe(
      data => {
        for(let x in data){

          if(data[x].specialite != null && data[x].address == this.addressE){
            this.medecins.push(data[x])
          }
        }
      },
      error => {
        console.log(error.message);
      }
    )  
  }

  retriveAdvices() {
    this.adviceService.getAllByPatient(this.currentUser.id)
    .subscribe(
      data => {
        this.conseils = data;
        this.loading = false;
      },
      error => {
        console.log(error.message);
      }
    )  
  }

  newConseil(): void {
    this.form = {
      sujet: "",
      description: "",
      medecin: ""
    }
  }

  onSubmit(): void {

    const data = {
      etat:"en cours",
      type: this.form.sujet,
      createdAt: new Date(),
      description: this.form.description,
      demandeur: this.currentUser.id,
      medecin: this.form.medecin
    };
    
    if(data.type != "" && data.description != ""){
      this.adviceService.createOne(data)
      .subscribe(
        response => {
          alert("Créer une réclamation avec succés")
          this.reloadPage();  
        },
        error => {
          console.log(error);
          alert("Echec d'ajouter une nouvelle réclamation !");
      });
    }
  }

  onReset(form: NgForm): void {
    form.reset();
    this.newConseil();
  }

  reloadPage(): void {
    window.location.reload();
    this.newConseil();    
  }

  voirReponse(id: string): void{
    this.reponseService.getAllByAdvice(id)
    .subscribe(
      data => {
        this.reponseAdvice = data;
      },
      error => {
        console.log(error.message);
      });
  }

  deleteConseil(id: any): void {
    var c=prompt(" Voulez vous supprimez cette demande (o/n) ?");

    if(c=="o"){
      this.adviceService.deleteOne(id)
      .subscribe(
        response => {
          alert("Demande supprimé avec succés");
          this.reloadPage();
        },
        error => {
          console.log(error);
      });
    }
  }


}
