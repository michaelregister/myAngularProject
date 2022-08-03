import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'myAngularProject';
  constructor(){
    fetch('https://myexpressapp1.azurewebsites.net/users').then(response => response.text())
    .then(result => {
        console.log(result);
        alert(result);
    });
  }
}
