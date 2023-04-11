import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userAddress'
})
export class UserAddressPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    console.log(value)
    return value.filter((val: {
      [x: string]: any; type: string; 
    }) => {
      let address = val['address'];

      if (address && typeof address === 'string') {
        let rVal = address.includes(args);
        return rVal;
      }
      return false;
    });
  }
}