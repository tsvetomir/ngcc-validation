import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import '@ngxs/form-plugin';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }