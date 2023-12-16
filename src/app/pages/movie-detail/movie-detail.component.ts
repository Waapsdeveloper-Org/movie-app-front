import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  item: any;
  constructor(private nav: NavService, private filmService: FilmsService) {

  }

  ngOnInit() {
    this.initialize();
  }

  initialize() {

    let id = this.nav.getQueryParams()['id'];

    if(!id){
      this.nav.pop();
      return;
    }

    this.filmService.getFilm(id).then((res: any) => {
      this.item = res;
    });

  }

  back() {
    this.nav.pop();
  }

  


}
