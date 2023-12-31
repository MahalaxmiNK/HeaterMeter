import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperatureDisplayComponent } from './temperature-display/temperature-display.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
