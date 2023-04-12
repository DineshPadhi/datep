import { Component } from '@angular/core';
import { DatepicComponent } from './datepic/datepic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private datepic: DatepicComponent) {}
  title = 'datep';
  dates: any;
  singleDate: boolean = false;
  data: any;
  setSingleDate($event: any) {
    this.data = $event.target.innerText;

    this.singleDate = true;
    this.dates = new Date().toLocaleDateString('en-US');
    this.datepic.setdatas(this.data);
  }
  setMultipleDate($event: any) {
    this.data = $event.target.innerText;
    this.singleDate = false;
    this.dates = new Date().toLocaleDateString('en-US');
    this.datepic.setdatas(this.data);
  }
}
