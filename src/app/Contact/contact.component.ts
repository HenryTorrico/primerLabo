import {Component} from '@angular/core';
import {Contact} from './contact';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']

})

export class ContactComponent{
	public titulo= 'CONTACTANOS';
	constructor(
		){
		document.clear();
	}
	ngOnInit(){
		document.clear();
	}
}
    