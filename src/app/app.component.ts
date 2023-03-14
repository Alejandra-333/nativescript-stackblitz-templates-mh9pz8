import { Component, OnInit } from '@angular/core';
import { EventData } from '@nativescript/core';
import Theme from '@nativescript/theme';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.componenent.css'],
})
export class AppComponent implements OnInit {
  isDark: boolean = true;
  ngOnInit(): void {
    Theme.setMode(Theme.Dark);
  }
  changeMode(args: EventData) {
    if (this.isDark) {
      this.isDark = false;
      Theme.setMode(Theme.Light);
    } else {
      this.isDark = true;
      Theme.setMode(Theme.Dark);
    }
  }
}
