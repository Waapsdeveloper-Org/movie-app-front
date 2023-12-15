import { Component } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  list = [];
  constructor(public films: FilmsService) {
    this.initialize();
  }

  initialize() {
    this.films.getFilms().then((res: any) => {
      this.list = res;
    });
  }


}
