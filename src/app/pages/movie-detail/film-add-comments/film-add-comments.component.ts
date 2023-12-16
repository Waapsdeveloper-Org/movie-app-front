import { Component, Input } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { FilmsService } from 'src/app/services/films.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-film-add-comments',
  templateUrl: './film-add-comments.component.html',
  styleUrls: ['./film-add-comments.component.scss']
})
export class FilmAddCommentsComponent {

    @Input() filmId: number = -1;
    comment: string = "";
    rating: number = 0;
    constructor(private utility: UtilityService, private filmService: FilmsService, private events: EventsService) { }

    ngOnInit() {
    }

    ratingChange($event: number){
      this.rating = $event;
    }

    formSubmit() {

      console.log(this.comment)

      if(!this.comment){
        this.utility.presentFailureToast('Please enter comment');
        return;
      }

      if(!this.rating || this.rating == 0){
        this.utility.presentFailureToast('Please enter ratings');
        return;
      }

      this.addComment();



    }

    async addComment() {

      let data = {
        film_id: this.filmId,
        comment: this.comment,
        rating: this.rating
      };

      const res = await this.filmService.postFilmComments(data) as any;
      console.log(res);
      this.rating = 0;
      this.comment = "";
      this.events.publish('comment:added', res);


    }
}
