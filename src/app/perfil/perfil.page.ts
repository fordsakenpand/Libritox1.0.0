import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario = JSON.parse(localStorage.getItem('usuario'));

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async error(){
    const alert = await this.alertController.create({
      header:'Funcion aún no disponible',
      message:'Esta funcion será agregada en versiones futuras',
      buttons:['Aceptar']
    });
    await alert.present();
  }

}
