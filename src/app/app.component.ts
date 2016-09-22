import { Component } from '@angular/core';

import { LANG } from './lang';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  labels = {
    trips: LANG === 'nl' ? 'Reizen' : 'Trips',
    profile:  LANG === 'nl' ? 'Profiel' : 'Profile'
  };
}
