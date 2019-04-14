import { Component } from '@angular/core';
import 'my-credit-card'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My LitElement Bank';
  info = '';
  sendInfo(event) {
    console.log(`Hello, my name is!`,event);
    this.info = JSON.stringify(event.detail);
  }
}
