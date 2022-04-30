import { Component } from '@angular/core';
import { data } from './const/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gsapStackCarousel';
  data = data;

}
