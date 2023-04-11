import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdviceService } from 'src/app/_services/advice/advice.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-list-advices',
  templateUrl: './list-advices.component.html',
  styleUrls: ['./list-advices.component.css']
})
export class ListAdvicesComponent {

  loading: boolean = true;

  currentUser: any = null;

  conseils:any = [];

  form: any = {
    sujet: "",
    description: "",
    medecin: ""
  }

  constructor(
    private adviceService: AdviceService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    if(this.currentUser != null)
      this.retriveAdvices();
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
      medecin: "6430a5ae7ea6241ba23febe8"
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
