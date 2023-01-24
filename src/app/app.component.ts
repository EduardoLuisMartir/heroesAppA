import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[
    `img{
     width: 100%;
     border-radius:10px;
    }  `
  ]
})
export class AppComponent {
  title = 'heroesApp';
}
