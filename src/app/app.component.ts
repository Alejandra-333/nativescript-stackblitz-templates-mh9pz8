import { Component, OnInit } from '@angular/core';
import Theme from '@nativescript/theme';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.componenent.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    Theme.setMode(Theme.Dark);
  }
}
