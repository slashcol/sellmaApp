import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';
import { CustomerPage } from '../customer/customer.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 username: string = '';
 password: string = '';
  estado: any;
  full_name: any;

  constructor(
    private router: Router,
    public toastController: ToastController,
    private postPvdr: PostProvider,
    public navCtrl : NavController,
    private storage: Storage,
    ) { }

  ngOnInit() {

  }

  formRegister() {
    this.router.navigate(['/register']);
  }

  async proseslogin() {
    if (this.username != '' && this.password != '') {
      let body = {
        username: this.username,
        password: this.password,
        estado: this.estado,
        full_name: this.full_name,
        aksi: 'login'
      };
      this.postPvdr.postData(body, 'file_aksi.php').subscribe(async data => {
       var alertpesan = data.msg;
       if (data.success) {
         this.storage.set('session_storage', data.result);
         this.router.navigate(['/customer']);
         const toast = await this.toastController.create({
          message: 'Bienvenido' + this.username,
          duration: 2000
         });
         toast.present();
         console.log(data);
       } else {
         const toast = await this.toastController.create({
           message: alertpesan,
           duration: 2000
         });
         toast.present();
       }
     });

    } else {
      const toast = await this.toastController.create({
        message: 'Usuario O contraseña Invalidas',
        duration: 2000
      });
      toast.present();
    }

    this.username = '';
    this.password = '';

    }

    public continuar(){
      this.navCtrl.navigateRoot(['/customer']);
     }
  
  }
