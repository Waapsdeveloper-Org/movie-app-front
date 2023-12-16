import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmCommentsComponent } from './film-comments.component';



@NgModule({
  declarations: [
    FilmCommentsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilmCommentsComponent
  ]
})
export class FilmCommentsModule { }
