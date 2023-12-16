import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-pinch-user',
  templateUrl: './pinch-user.component.html',
  styleUrls: ['./pinch-user.component.scss']
})
export class PinchUserComponent implements OnInit{

  user: any;
  constructor(private nav: NavService) { }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    let user = localStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user);
    }

  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.user = null;
    this.nav.setRoot('/');
  }
}
