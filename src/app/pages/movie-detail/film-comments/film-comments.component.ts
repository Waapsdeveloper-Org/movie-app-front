import { Component, Input } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-film-comments',
  templateUrl: './film-comments.component.html',
  styleUrls: ['./film-comments.component.scss']
})
export class FilmCommentsComponent {

  private _filmId: number = -1;
  list: any[] = [];

  @Input()
  public get filmId(){
    return this._filmId;
  };

  public set filmId(value){
    this._filmId = value;
    this.getFilmComments()
  }

  constructor(private filmService: FilmsService, private events: EventsService) {
    this.events.subscribe('comment:added', () => {
      this.getFilmComments()
    });
  }

  ngOnInit() {
  }

  async getFilmComments() {
    const res = await this.filmService.getFilmComments(this.filmId) as any[];
    this.list = res;

  }


}
