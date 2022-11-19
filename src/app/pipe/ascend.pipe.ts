import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ascend'
})
export class AscendPipe<T extends { [x: string]: any }> implements PipeTransform {

  transform(value: T[], ascend: Boolean = true): T[] {
    if (ascend == true) {
      return value;
    }
    else return value.reverse()
  }
}
