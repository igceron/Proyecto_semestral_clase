import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Camera,CameraResultType,CameraSource } from '@capacitor/camera'
import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nombre : string =""
  usuario : string =""
  password : string =""

  constructor(public mensaje:ToastController,public alerta:AlertController, private router:Router, private storage : Storage) { }

  async tomarFoto(){
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source:CameraSource.Camera,
      quality:100
    });
    console.log(image.webPath)
  }

  async obtenerUbicacion(){
    const coordenadas = await Geolocation.getCurrentPosition();
    console.log('Latitud ==>', coordenadas.coords.latitude);
    console.log('Longitud ==>', coordenadas.coords.longitude);
  }
  
  
  
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
      this.storage.set("nombre",this.nombre)
      console.log("inicio de sesion exitoso")
      this.MensajeCorecto() 
      this.router.navigate(["/home"])  
    }
  }

  async ngOnInit() {
    await this.storage.create();
  }

}
