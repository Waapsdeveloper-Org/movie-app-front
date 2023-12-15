import { Injectable } from '@angular/core';
import { NetworkService } from './network.service';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(public network: NetworkService) { }

  getFilms() {
    return new Promise(async (resolve) => {
      const res = await this.network.getFilms();

      if(res){
        resolve(res);
      } else {
        resolve([]);
      }



    });

  }

}
