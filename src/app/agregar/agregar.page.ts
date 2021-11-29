import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

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
