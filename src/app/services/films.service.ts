import { Injectable } from '@angular/core';
import { NetworkService } from './network.service';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(public network: NetworkService) { }

  getFilms(search = "") {
    return new Promise(async (resolve) => {

      const res = await this.network.getFilms(search);
      console.log(res)
      if(res){
        resolve(res);
      } else {
        resolve([]);
      }
    });

  }

  getFilm(id: number) {
    return new Promise(async (resolve) => {

      const res = await this.network.getFilm(id);
      console.log(res)
      if(res){
        resolve(res);
      } else {
        resolve(null);
      }
    });

  }

  getFilmComments(id: number) {
    return new Promise(async (resolve) => {

      const res = await this.network.getFilmComments(id);
      console.log(res)
      if(res){
        resolve(res);
      } else {
        resolve(null);
      }
    });

  }

  postFilmComments(data: { filmId: number; comment: string; rating: number; }) {
    return new Promise(async (resolve) => {

      const res = await this.network.postFilmComments(data);
      console.log(res)
      if(res){
        resolve(res);
      } else {
        resolve(null);
      }
    });

  }

}
