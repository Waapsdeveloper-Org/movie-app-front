import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';
import { FilmsService } from 'src/app/services/films.service';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  item: any;
  user: any;
  constructor(private nav: NavService, private filmService: FilmsService, private events: EventsService ) {

    this.events.subscribe('comment:added', () => {
      this.filmService.getFilm(this.item.id).then((res: any) => {
        this.item = res;
      });
    });
  }

  ngOnInit() {
    this.initialize();
  }

  initialize() {

    let user = localStorage.getItem('user');
    if(user){
      this.user = JSON.parse(user);
    }

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
