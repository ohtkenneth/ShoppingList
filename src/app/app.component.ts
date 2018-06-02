import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  route: string = 'recipes';

  // need to get content value from header
  routePage({ pageRoute }) {
    this.route = pageRoute;
    console.log(this.route);
  }
}
