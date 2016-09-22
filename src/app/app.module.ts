import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProfileModule } from './profile/profile.module';
import { TripsModule } from './trips/trips.module';

import { routing, appRoutingProviders } from './app.routes';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProfileModule,
    TripsModule,
    routing
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
