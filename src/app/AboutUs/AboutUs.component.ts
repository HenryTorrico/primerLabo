import {Component} from '@angular/core';
import {AboutUs} from './AboutUs';

@Component({
    selector: 'AboutUs',
    templateUrl: './AboutUs.component.html',
    styleUrls: ['./AboutUs.component.css']

})

export class AboutUsComponent{
	public titulo= 'Acerca de Nosotros';
	constructor(
		){
		document.clear();
	}
	ngOnInit(){
		document.clear();
	}
    }
    