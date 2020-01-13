import { Component } from '@angular/core';

@Component({
  selector: 'er-root',
  template:`
      <nav class='navbar navbar-expand navbar-light'>
        <a class='navbar-brand'>{{pageTitle}}</a>
      </nav>
      <div class='container'>
        <router-outlet></router-outlet>
      </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pagetTitle = 'ApiError-Log';
}
