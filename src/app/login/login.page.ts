import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  formulariologin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navCtrl: NavController) {

    this.formulariologin = this.fb.group({
      nombre: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });

  }

  async entrar(){
    const f = this.formulariologin.value;

    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre === f.nombre && usuario.password === f.password){
      this.navCtrl.navigateRoot('home');
    }else{
      const alert = await this.alertController.create({
        header:'Datos incorrectos',
        message:'Los datos no estan registrados',
        buttons:['Aceptar']
      });

      await alert.present();
    }
  }

}
