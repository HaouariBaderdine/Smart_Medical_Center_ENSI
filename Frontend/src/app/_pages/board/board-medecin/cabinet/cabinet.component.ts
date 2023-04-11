import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CabinetService } from 'src/app/_services/cabinet/cabinet.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent {

  loading: boolean = true;

  currentUser: any = null;

  cabinet: any = null;

  form: any = {
    address: "",
    open: 0,
    close: 0,
    description: "",
    medecin: ""
  }

  constructor(
    private cabinetService: CabinetService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    if(this.currentUser != null)
      this.retriveCabinet();
  }

  retriveCabinet() {
    this.cabinetService.getByMedecin(this.currentUser.id)
    .subscribe(
      data => {
        this.cabinet = data;
        this.loading = false;
        console.log(this.cabinet)
        
      },
      error => {
        console.log(error.message);
      }
    ) 
    this.loading = false;
 
  }

  newCabinet(): void {
    this.form = {
      address: "",
      open: 0,
      close: 0,
      description: "",
      medecin: ""
    }
  }

  onSubmit(): void {

    const data = {
      address: this.form.address,
      open: this.form.open,
      close: this.form.close,
      description: this.form.description,
      medecin: this.currentUser.id
    };
    
    if(data.address != "" && data.description != ""){
      this.cabinetService.createOne(data)
      .subscribe(
        response => {
          alert("Création d'un cabinet avec succés")
          this.reloadPage();  
        },
        error => {
          console.log(error);
          alert("Echec de créer !");
      });
    }
  }

  onReset(form: NgForm): void {
    form.reset();
    this.newCabinet();
  }

  clear(): void{
    this.newCabinet();
  }

  reloadPage(): void {
    window.location.reload();
    this.newCabinet();    
  }


}
