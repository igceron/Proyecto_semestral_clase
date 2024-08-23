import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nombre : string =""
  usuario : string =""
  password : string =""

  constructor(public mensaje:ToastController,public alerta:AlertController, private router:Router) { }

  async MensajeError() {
    const alert = await this.alerta.create({
      header: 'Error',
      subHeader: 'Dato erroneo',
      message: 'Error al iniciar sesion',
      buttons: ['Aceptar']
    });
  
    await alert.present();
  }

  async MensajeCorecto() {
    const toast = await this.mensaje.create({
      message: 'Inicio de session exitoso',
      duration: 2000
    });
    toast.present();
  }

  ingresar(){
    if (this.usuario ==="" || this.password ==="" ){
      console.log("No puede dejar el usuario y la contraseña vacios ")
      this.MensajeError()
    }
    else{
      console.log("inicio de sesion exitoso")
      this.MensajeCorecto() 
      this.router.navigate(["/home"])  
    }
  }

  ngOnInit() {}

}
