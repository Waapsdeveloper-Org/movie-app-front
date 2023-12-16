import { Component } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';
import { NavService } from 'src/app/services/nav.service';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  list = [];
  searchText = "";
  constructor(public films: FilmsService, public nav: NavService) {
    this.initialize();
  }

  initialize() {
    this.films.getFilms().then((res: any) => {
      this.list = res;
    });
  }

  search() {

    // if(this.searchText){
      this.films.getFilms(this.searchText).then((res: any) => {
        this.list = res;
      });

    // }

  }

  openDetails(film: any) {
    this.nav.push('movie-detail', { id: film.id });
  }


}
