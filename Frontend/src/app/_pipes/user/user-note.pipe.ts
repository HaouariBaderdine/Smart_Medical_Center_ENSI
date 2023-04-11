import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userNote'
})
export class UserNotePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: {
      [x: string]: any; type: string; 
    }) => {
      let rVal = (val['note'].includes(args));
      return rVal;
    })

  }

}
