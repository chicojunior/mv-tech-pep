import { Component } from '@angular/core';
import { mainContentAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [mainContentAnimation()],
})
export class AppComponent {
  title = 'pep';
}
