import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre: string = "";

  //inicio de la funcion mostrarAlerta
  constructor(public alerta:AlertController) {
  }
  async presentAlert(titulo:string,message:string){
    const alert = await this.alerta.create({
      header:titulo,
      message:message,
      buttons:["ok"]
    })
    await alert.present();
  }

  mostrarAlerta(){
    (this.nombre!="" && this.presentAlert("Usuario" , "Su nombre es: " + this.nombre)|| this.presentAlert("Usuario " , "El campo no puede estar vacio"))
  }

  //aqui termina el mostrarAlerta

  mostrar_nombre(){
    console.log(this.nombre)
  }

}
