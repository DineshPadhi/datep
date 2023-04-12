import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datepic',
  templateUrl: './datepic.component.html',
  styleUrls: ['./datepic.component.css'],
})
export class DatepicComponent {
  @Input() value!: boolean;
  @Input() datas: any;
  date = new Date();
  today = new Date();
  yessterday: any;
  dates: any;
  constructor() {
    this.date.setDate(this.date.getDate());
    this.dates = this.date.toLocaleDateString('en-US');
    this.date = new Date();
    console.log('constructor date', this.dates);
    this.date.setDate(this.date.getDate() - 1);
    this.yessterday = this.date.toLocaleDateString('en-US');
    this.date = new Date();
    console.log('yester date', this.yessterday);
  }
  comparisonStartdateValidator() {
    console.log('hiiii');
  }

  setdatas(data: any) {
    console.log('hello', data);
    if (data == 'Yesterday') {
      console.log('dates is', this.dates);
    } else if (data == 'Last 7 days') {
    } else if (data == 'Last 30 days') {
    } else if (data == 'Custom dates') {
    } else {
      this.date.setDate(this.date.getDate());
    }
  }
}
