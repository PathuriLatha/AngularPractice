import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopcornService {

  constructor() {
    console.log("PopcornService has been Injected");
  }

  cookPopcorn(qty): string{
    console.log(qty, "Bags of popcorn cooked");
    return qty+" Bags of popcorn cooked";
  }

}
