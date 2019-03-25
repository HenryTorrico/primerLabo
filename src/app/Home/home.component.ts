import {Component} from '@angular/core';
import {Home} from './home';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
  	styleUrls: ['./home.component.css']

})

export class HomeComponent{
	public titulo= 'Bienvenido a la Pagina principal!';
	constructor(
		){
		document.clear();
	}
	ngOnInit(){
		document.clear();
	}
    }
    