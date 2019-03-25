import {Component} from '@angular/core';
import {IniciarSesion} from './IniciarSesion';

@Component({
    selector: 'IniciarSesion',
    templateUrl: './IniciarSesion.component.html',
    styleUrls: ['./IniciarSesion.component.css']

})

export class IniciarSesionComponent{
	public mail;

	generar(){
		var fileText=new Blob([this.mail],{type:"aplication/json"});
        var textURL=window.URL.createObjectURL(fileText);
        var downloadLink= document.createElement("a");
        downloadLink.download="myJson.json";
        downloadLink.innerHTML="";
        downloadLink.href=textURL;
        document.body.appendChild(downloadLink);
        downloadLink.click();
	}
    }
    