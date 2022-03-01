import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { async } from 'q';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx'
import { PostImagenService } from '../../providers/post-imagen.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  datos:FormGroup;

  formulario: FormData;
  fotos: any[] = [];
  loading: any;
 full_name: string = '';
 phone_number: string = '';
 identificacion: string = '';
 username: string = '';
 password: string = '';
 confirm_password: string = '';

  constructor(
    private router: Router,
    private postImagen: PostImagenService,
     public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private imagePicker: ImagePicker,
    public toastController: ToastController,
    private postPvdr: PostProvider,
    ) {         this.datos = this.formBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', [
                      Validators.required,
                      Validators.email
                  ]
              ],
      contrasena: ['', [
                          Validators.required,
                          Validators.minLength(6)
                      ]
                  ],
  });}

  ngOnInit() {

  }

  formLogin() {
    this.router.navigate(['/login']);
  }

  async addRegister() {
    if (this.full_name == '') {
      const toast = await this.toastController.create({
      message: 'Falta Nombre de usuario',
      duration: 2000
      });
      toast.present();
    } else if (this.phone_number == '') {
      const toast = await this.toastController.create({
        message: 'Ingresa un numero de telefono ',
        duration: 2000
        });
      toast.present();
    } else if (this.identificacion == '') {
      const toast = await this.toastController.create({
        message: 'Ingresa identificacion ',
        duration: 2000
        });
      toast.present();
    } else if (this.username == '') {
      const toast = await this.toastController.create({
        message: 'Ingresa Nombre de Usuario',
        duration: 2000
        });
      toast.present();

    } else if (this.password == '') {
      const toast = await this.toastController.create({
        message:'Ingresa Contraseña',
        duration: 2000
        });
      toast.present();

    } else if (this.password != this.confirm_password) {
      const toast = await this.toastController.create({
        message: 'Contraseña no Coincide',
        duration: 2000
        });
      toast.present();
    } else {
      let body = {
        full_name: this.full_name,
        phone_number: this.phone_number,
        identificacion: this.identificacion,
        username: this.username,
        password: this.password,
        aksi: 'add_register'
      };
      this.postPvdr.postData(body, 'file_aksi.php').subscribe(async data => {
       var alertpesan = data.msg;
       if (data.success) {
         this.router.navigate(['/login']);
         const toast = await this.toastController.create({
          message: 'Register successfully',
          duration: 2000
         });
         toast.present();
       } else {
         const toast = await this.toastController.create({
           message: alertpesan,
           duration: 2000
         });
       }
     });

    }
  }

  

  presentarLoader() {
    this.loading = this.loadingCtrl.create({
      message: 'Registrando...',
      duration: 2000
    });

    this.loading.present();
  }

  async mostrar_mensaje(msj){
      const toast = await this.toastController.create({
        message: msj,
        duration: 3000,
      });
      toast.present();
  }


  abrirGaleria(){

    /*  let arr = [];
    arr[0] = 'http://lorempixel.com/350/230/';
    arr[1] = 'http://lorempixel.com/400/200/';

    this.fotos = arr; */
 
  let options: ImagePickerOptions = {
      maximumImagesCount: 1
    }

    this.imagePicker.getPictures(options)
    .then((results) => {
      this.fotos = results;
    /*   for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]); 
    } */
    }, (err) => {
      this.mostrar_mensaje('no carga la foto');
     });
     

  }

  borrarFoto(index){
    this.fotos.splice(index, 1);
  }

  
  registrar(){

    if(this.fotos.length < 1){
      this.mostrar_mensaje('Debes seleccionar una foto reciente');
      return;
    }
   this.postImagen.getFormulario(this.fotos)
   .then((result) => {
     this.formulario = result
     
     this.formulario.append('nombre', this.datos.get('nombre').value);
            this.formulario.append('correo', this.datos.get('correo').value);
            this.formulario.append('contrasena', this.datos.get('contrasena').value);

            this.postPvdr.addUser(this.formulario)
              .then((result) => {

                if(result['error']){

                 // this.presentarAlerta(result['mensaje']);
                }else{

                  //Eliminación de los valores
                  this.datos.get('nombre').setValue('');
                  this.datos.get('correo').setValue('');
                  this.datos.get('contrasena').setValue('');
                  /*------------------------------------------*/
                  this.fotos = [];

                //  this.presentarAlerta(result['mensaje']);
                }



                this.loading.dismiss();
              }, err => {


                console.log(err);
                this.loading.dismiss();
              });



          })
          .catch(err =>{
            this.mostrar_mensaje(err);
          });
    }

}
