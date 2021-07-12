import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-udemy-app';
  author = 'Geordin Soucie';
  subtitle = 'A Learning App';
}


//misc notes
// ts.config.json to change strict mode (strict: false)
//angular.json has a styles array to put bootstrap in if I need it