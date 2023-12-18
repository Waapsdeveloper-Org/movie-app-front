import { Component, ElementRef, ViewChild } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';
import { NavService } from 'src/app/services/nav.service';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @ViewChild('loader') loader?: ElementRef;
  list = [];
  searchText = "";
  loading = true;
  searchType = "database";
  constructor(public films: FilmsService, public nav: NavService) {
    this.initialize();
  }

  initialize() {
    this.films.getFilms().then((res: any) => {
      this.list = res;
      setTimeout( () => {
        this.loading = false;
      }, 1000)
    });
  }

  search() {

    // if(this.searchText){
      this.toggleLoader(true)
      this.films.getFilms(this.searchText, this.searchType).then((res: any) => {
        this.list = res;
        this.toggleLoader(false)
      });

    // }

  }

  openDetails(film: any) {
    this.nav.push('movie-detail', { id: film.id });
  }

  toggleLoader(fade = false ) {
    // let element = this.loader?.nativeElement;
    if(fade){
      this.loading = true;
    } else {
      setTimeout( () => {
        this.loading = false;
      }, 1000)
    }
  }

  toggleSearchTYpe() {
    this.searchType = this.searchType == "database" ? "elastic" : "database";
  }


}
