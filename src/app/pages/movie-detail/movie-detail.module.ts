import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieDetailRoutingModule } from './movie-detail-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilmCommentsModule } from './film-comments/film-comments.module';
import { FilmAddCommentsModule } from './film-add-comments/film-add-comments.module';
import { StarRatingModule } from './star-rating/star-rating.module';


@NgModule({
  declarations: [
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    MovieDetailRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FilmCommentsModule,
    FilmAddCommentsModule,
    StarRatingModule
  ],
  exports: [
    MovieDetailComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class MovieDetailModule { }
