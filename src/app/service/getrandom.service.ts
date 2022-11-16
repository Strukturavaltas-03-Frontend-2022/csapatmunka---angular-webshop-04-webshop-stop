import { Injectable } from '@angular/core';
import { Product } from '../model/classes/product';

@Injectable({
  providedIn: 'root'
})
export class GetrandomService {

  constructor() { }

  getRandom(arr:Product[], n:number) {
    let result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

}
