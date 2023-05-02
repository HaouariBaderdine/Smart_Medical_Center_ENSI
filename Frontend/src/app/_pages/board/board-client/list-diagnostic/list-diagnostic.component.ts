import { Component } from '@angular/core';
import { maladies } from './maladies';


interface Maladie {
  nom: string;
  symptomes: string[];
  traitements: string[];
}

@Component({
  selector: 'app-list-diagnostic',
  templateUrl: './list-diagnostic.component.html',
  styleUrls: ['./list-diagnostic.component.css']
})
export class ListDiagnosticComponent {

  loading: boolean = true;

  currentUser: any = null;

  maladies: Maladie[] = maladies;
  symptomes: string[] = [];
  traitements: string = "";
  diagnostic: string = "";
  traitement: boolean = false;

  nouveauSymptome: string ="";

  listSymptomes : string[] = ["douleur en avalant", "gorge irritée","fièvre","fatigue","maux de tête","toux"]

  ajouterSymptome(symptome: string) {
    if (!this.symptomes.includes(symptome)) {
      this.symptomes.push(symptome);
    }
  }

  retirerSymptome(symptome: string) {
    let index = this.symptomes.indexOf(symptome);
    if (index >= 0) {
      this.symptomes.splice(index, 1);
    }
  }

  executerDiagnostic() {
    let maladiesPossibles: any[] = [];
    for (let maladie of this.maladies) {
      if (this.symptomes.every(symptome => maladie.symptomes.includes(symptome))) {
        maladiesPossibles.push(maladie);
      }
    }
    if (maladiesPossibles.length > 0) {
      let traitements: string[] = [];
      for (let maladie of maladiesPossibles) {
        traitements.push(...maladie.traitements);
      }
      this.diagnostic = " "+ maladiesPossibles.map(maladie => maladie.nom).join(", ");
      this.traitement = true;
      this.traitements += "\n " + Array.from(new Set(traitements)).join(", ");
    } else {
      this.diagnostic = "Aucune maladie trouvée pour ces symptômes";
    }
  }

}
