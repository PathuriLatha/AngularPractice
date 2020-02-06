import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {
  constructor() { }

  public add(...params: number[]): number{
    let result: number = 0;
    for(let val of params){
      result += val;
    }
    return result;
  }
}
