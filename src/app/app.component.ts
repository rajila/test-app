import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular';
  curso: string = 'Course of Angular with Spring 5';
  alumno: string = 'Ronald Daniel Ajila'
}
