import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userSpecialte'
})
export class UserSpecialtePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: {
      [x: string]: any; type: string; 
    }) => {
      console.log(args)

      let rVal = (val['specialite'].includes(args));
      return rVal;
    })

  }

}
