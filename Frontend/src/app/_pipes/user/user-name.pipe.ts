import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userName'
})
export class UserNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: {
      [x: string]: any; type: string; 
    }) => {
      let rVal = (val['name'].toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}
