import {ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//importando componentes
import {IniciarSesionComponent} from './IniciarSesion/IniciarSesion.component';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './AboutUs/AboutUs.component';
import {DonationsComponent} from './Donations/donations.component';
import {ContactComponent} from './Contact/contact.component';


const appRoutes: Routes=[
	{path: 'IniciarSesion',component:IniciarSesionComponent},
	{path: 'Home',component:HomeComponent},
	{path: 'aboutus',component:AboutUsComponent},
	{path: 'donations',component:DonationsComponent},
	{path: 'contact',component:ContactComponent}
	

];

export const appRoutingProviders: any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);