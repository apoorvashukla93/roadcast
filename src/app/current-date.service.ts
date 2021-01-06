import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentDateService {
  private currentDate: Date;
  constructor() { }

  /**
   * @name getCurrentDate
   * @metodOf service: current-date.service
   * @description
   * getter for currentdatetime
   */
  getCurrentDate() {
    return this.currentDate;
  }

  /**
   * @name setCurrentDate
   * @methodOf service: current-date.service
   * @description
   * setter for currentDateTime
   */
  setCurrentDate() {
    this.currentDate = new Date();
  }
}
