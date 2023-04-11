import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adviceDate'
})
export class AdviceDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: {
      [x: string]: any; type: string; 
    }) => {
      let rVal = (val['createdAt'].toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}
