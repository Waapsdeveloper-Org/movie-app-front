import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmAddCommentsComponent } from './film-add-comments.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { StarRatingModule } from '../star-rating/star-rating.module';

@NgModule({
  declarations: [
    FilmAddCommentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StarRatingModule
  ],
  exports: [
    FilmAddCommentsComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
})
export class FilmAddCommentsModule { }
