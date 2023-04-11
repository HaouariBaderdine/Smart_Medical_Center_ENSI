import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adviceEtat'
})
export class AdviceEtatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: {
      [x: string]: any; type: string; 
    }) => {
      let rVal = (val['etat'].toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}
