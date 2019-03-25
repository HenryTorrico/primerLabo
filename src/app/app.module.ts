import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {IniciarSesionComponent} from './IniciarSesion/IniciarSesion.component';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './AboutUs/AboutUs.component';
import {DonationsComponent} from './Donations/donations.component';
import {ContactComponent} from './Contact/contact.component';
import {routing,appRoutingProviders} from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,  
    HomeComponent,
    AboutUsComponent,
    DonationsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    NgbModule.forRoot(),
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
