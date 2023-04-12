import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepicComponent } from './datepic/datepic.component';
import { FormsModule } from '@angular/forms';
// import { FlexLayoutModule } from "@angular/flex-layout";
@NgModule({
  declarations: [AppComponent, DatepicComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatNativeDateModule,
    FormsModule,
    // FlexLayoutModule
  ],
  providers: [DatepicComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
