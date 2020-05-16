import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bgv';

  check:boolean = true;
  check1:boolean = false;

  validate(){
    this.check = false;
    this.check1 = true;
  }
}
