import { Component } from '@angular/core';
import { CurrentDateService } from "./current-date.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'roadcastAssign';
  currentDate: Date;
  constructor(private CurrentDate: CurrentDateService) {
    this.CurrentDate.setCurrentDate();
  }

  ngOnInit() {
    this.currentDate = this.CurrentDate.getCurrentDate();
  }
}
