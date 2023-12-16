import { Component, Input } from '@angular/core';
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
    constructor(private utility: UtilityService, private filmService: FilmsService) { }

    ngOnInit() {
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
        filmId: this.filmId,
        comment: this.comment,
        rating: this.rating
      };

      const res = await this.filmService.postFilmComments(data)


    }
}
