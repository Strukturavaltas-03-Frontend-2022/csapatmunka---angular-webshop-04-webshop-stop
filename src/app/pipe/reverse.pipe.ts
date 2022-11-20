import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe<T extends { [x: string]: any }> implements PipeTransform {

  transform(value: T[], needToReverse: Boolean = true): T[] {
    if (!needToReverse) {
      return value;
    }
    else return value.reverse()
  }
}
