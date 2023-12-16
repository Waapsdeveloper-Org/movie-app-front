import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {

  private _rating = 0;
  @Output() ratingChange = new EventEmitter<number>();
  @Input() disabled = false;
  @Input()
  public get rating(){
    return this._rating;
  }

  public set rating(value){
    this._rating = value;
  }

  constructor() { }

  ngOnInit() {
  }

  select(n: number){
    if(this.disabled){
      return;
    }
    this.rating = n;
    this.ratingChange.emit(this.rating);
  }


}
