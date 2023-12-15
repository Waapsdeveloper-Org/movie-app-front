import { Component, Injector } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent extends BasePage {
  constructor(
    injector: Injector,
  ) {
    super(injector);
  }

  goToLogin(){
    this.nav.push('pages/login')
  }

}
