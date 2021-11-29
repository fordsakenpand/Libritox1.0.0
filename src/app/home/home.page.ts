import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController) {}
  
  async info(){
    const alert = await this.alertController.create({
      header:'Funciones de la aplicación',
      message:'-Complatible con IOS y Android \b -Funciona con conexion a internet \b -Al tener cuenta no tendrás anuncios\b -Los libros pedidos de forma fisica tendran un costo de $1500 y por cada dia de retraso se aumenta $500 \b -Los libros pedidos de forma digital podrán descargarse en un archivo .RAR o Zip \b  -Libros disponibles en español e ingles',
      buttons:['Aceptar']
    });
    await alert.present();
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
