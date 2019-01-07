import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnum'
})
export class CnumPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    return value*value*value;
  }

}
