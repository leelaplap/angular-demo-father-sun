import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-demo-father-sun';
  keyParent;

  getKeySearch(value) {
    this.keyParent = value;
  }
}

