import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formulariologin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navCtrl: NavController ) {

    this.formulariologin = this.fb.group({
      nombre: new FormControl('',Validators.required),
      correo: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      confirmacionpassword: new FormControl('',Validators.required)
    });

  }

  ngOnInit() {
  }

  async guardar(){
    const f = this.formulariologin.value;

    if(this.formulariologin.invalid){
      const alert = await this.alertController.create({
        header:'Datos incompletos',
        message:'Porfavor ingrese los datos pedidos',
        buttons:['Aceptar']
      });

      await alert.present();
      return;
    }

    const usuario = {
      nombre: f.nombre,
      correo: f.correo,
      password: f.password
    };
    localStorage.setItem('usuario',JSON.stringify(usuario));
      this.navCtrl.navigateRoot('login');
  }

}
