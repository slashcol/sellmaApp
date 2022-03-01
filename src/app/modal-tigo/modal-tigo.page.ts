import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, ModalController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';
import { async } from 'q';
//import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';
//import { ModalRecargasPage } from '../modal-recargas/modal-recargas.page';

@Component({
  selector: 'app-modal-tigo',
  templateUrl: './modal-tigo.page.html',
  styleUrls: ['./modal-tigo.page.scss'],
})
export class ModalTigoPage implements OnInit {
  
  /*  operador= {
  oper:null
}  */

data = [
  {
    name: 'Claro',
    color: 'danger',
    selected: false
  },
  {
    name: 'Movistar',
    color: 'success',
    selected: false
  },
  {
    name: 'Tigo',
    color: 'secondary',
    selected: false
  },
  {
    name: 'Virgin',
    color: 'tertiary',
    selected: false
  }

]
full_name: string = '';
phone_number: string = '';
identificacion: string = '';
username: string = '';
password: string = '';
confirm_password: string = '';
no_abonado: string = '';
valor: string = '';
customer = false;
textoBuscar : '';

/* operador : any; */
name: any;
check: any;
operador: any = [];
customers: any = [];
upsaldos: any = [];
limit: number = 10;
start: number = 0;

user_id: any;
saldo: string;
login_id: any;
anggota: any;


imagenes = [
  'assets/comunic/claro.jpeg',
  'assets/comunic/movistar.jpeg',
  'assets/comunic/tigo.jpeg',
  'assets/comunic/virgin.png',
]

constructor(
  private router: Router,
  public toastController: ToastController,
  private storage: Storage,
  private modalCtr: ModalController,
  private actRoute: ActivatedRoute,
  private postPvdr: PostProvider,
  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) => {

      this.login_id = data.login;
      this.saldo = data.saldo;
      this.identificacion = data.identificacion;
      this.username = data.username;
      console.log(data);
      });
  }

  ionViewWillEnter() {
    this.customers = [];
    this.upsaldos = [];    
    this.start = 0;
   // this.logueo();
 
    this.loadSaldo();
       this.storage.get('session_storage').then((res) => {
      this.anggota = res;
      this.login_id = this.anggota.login_id;
      this.user_id = this.anggota.user_id;
      this.saldo = this.anggota.saldo;
      this.phone_number = this.anggota.phone_number;
      this.username = this.anggota.username;
    });
  }

  salirSinNada(){
    this.modalCtr.dismiss();

  }

  EnviarDatos(){
    this.modalCtr.dismiss({

      producto: '1',
      operador: 'claro'

    });

  }


formLogin() {
  this.router.navigate(['/login']);
}
doRefresh(event) {
  setTimeout(() => {
    this.ionViewWillEnter();
    event.target.complete();
  }, 1500);
}


hacerRecarga(){
  this.UpinProces();  
  this.modalCtr.dismiss();
  this.addRecarga();
}


async addRecarga() {
  if (this.no_abonado == '') {
    const toast = await this.toastController.create({
    message: 'Ingresa un numero valido',
    duration: 2000
    });
    toast.present();
     } else if (this.operador == '') {
    const toast = await this.toastController.create({
      message: 'Ingrese un operador movil',
      duration: 2000
      });
    toast.present();     
  } else if (this.valor == '') {
    const toast = await this.toastController.create({
      message: 'ingresa un valor valido',
      duration: 2000
      });
    toast.present(); 
    } else {        
    let body = {    
      aksi: '345456789',      
      saldo: this.saldo,
      user_id: this.user_id,
      no_abonado: this.no_abonado,
      valor: this.valor,        
       operador: this.operador                  
    };    
    this.postPvdr.postData(body, 'mi_version.php').subscribe( async data => {
      var alertpesan = data.msg;         
      if (data.success) {
        this.router.navigate(['/customer']);
        const toast = await this.toastController.create({
          message: 'Contacto Agregado',
          duration: 2000       
        });         
        
        //console.log(this.contact_customer);
        toast.present();
      } else {
        console.log('aqui no pasa nada');
        const toast = await this.toastController.create({
          message: alertpesan,
          duration: 2000
         
          
        });

   
    
      
      }
    
      
    });
  /*
  }else{
    const toast = await this.toastController.create({
      message: 'saldo',
      duration: 2000
    });
    toast.present();
  }
  */
}


}





async UpinProces(){  
  let body = {    
    aksi: '87081721321',      
   valor: this.valor,
   saldo : this.saldo,  
   user_id: this.user_id,
    login_id : this.login_id,               
  };
  this.postPvdr.postData(body, 'file_aksi.php').subscribe( async data => {
    var alertpesan = data.msg;          
    if (data.success) {        
     this.proseslogout()
      //this.router.navigate(['/customer']);
      const toast = await this.toastController.create({
        message: 'Por Tu Seguridad debes Iniciar de Nuevo ',
        duration: 2000
   
      });     
      
      console.log(this.valor);
      console.log(this.saldo);
      toast.present();
    } else {
      const toast = await this.toastController.create({
        message: alertpesan,
        duration: 2000
      });  
          }
  
    
  });

}

async proseslogout() {
  this.storage.clear();
  this.router.navigate(['/login']);
  const toast = await this.toastController.create({
    message: 'Debes Ingresar de nuevo por seguridad',
    duration: 2000
   });
  toast.present();

}

loadSaldo() {

  return new Promise(resolve => {
    let body = {
      aksi: 'getdata3',            
      saldo : this.saldo,
      user_id :this.user_id
     
    };
    //console.log(this.login_id);

    this.postPvdr.postData(body, 'file_aksi.php').subscribe(data => {
      if(data.result) {
        for(let upsaldo of data.result) {
         this.upsaldos.push(upsaldo)
        
         
      }
      }
      console.log(this.saldo);
      resolve(true);
    });
   
  });
  
}

//claro
/* async datosClaro(){
 const modal = await this.modalCtr.create({
    component: ModalRecargasPage,
    componentProps:{
      no_abonado: this.no_abonado,
      valor: this.valor,       
      paquete: '',
      operador: ''
     
    }
  });
await modal.present();

  const { data } = await modal.onDidDismiss();

  console.log('Mostrara', data);
  

} */
/* 
async datosMovistar(){
  const modal = await this.modalCtr.create({
     component: ModalMovistarPage,
     componentProps:{
       no_abonado: this.no_abonado,
       valor: this.valor,       
       paquete: '',
       operador: ''
      
     }
   });
await modal.present();

   const { data } = await modal.onDidDismiss();

   console.log('Mostrara', data);
   

 }


async datosTigo(){
  const modal = await this.modalCtr.create({
     component: ModalTigoPage,
     componentProps:{
       no_abonado: this.no_abonado,
       valor: this.valor,       
       paquete: '',
       operador: ''
      
     }
   });
await modal.present();

   const { data } = await modal.onDidDismiss();

   console.log('Mostrara', data);
   

 }


async datosVirgin(){
  const modal = await this.modalCtr.create({
     component: ModalVirginPage,
     componentProps:{
       no_abonado: this.no_abonado,
       valor: this.valor,       
       paquete: '',
       operador: ''
      
     }
   });
await modal.present();

   const { data } = await modal.onDidDismiss();

   console.log('Mostrara', data);
   

 }
 */
onClick(check){
  console.log(check);
  

}

}

