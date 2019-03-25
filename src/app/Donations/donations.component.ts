import {Component} from '@angular/core';
import {Donations} from './donations';

@Component({
    selector: 'donations',
    templateUrl: './donations.component.html',
    styleUrls: ['./donations.component.css']

})

export class DonationsComponent{
	public titulo= 'Donaciones';
	constructor(
		){
		document.clear();
	}
	ngOnInit(){
		document.clear();
	}
}
    