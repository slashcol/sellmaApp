import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.page.html',
  styleUrls: ['./updatecustomer.page.scss'],
})
export class UpdatecustomerPage implements OnInit {


  customers: any = [];
  upsaldos: any = [];
  limit: number = 10;
  start: number = 0;

  idMeta: number;
  user: string = '';
  nombre: string = '';
  direccion: string = '';
  telefono: number;
  identificacion: number;
  codigo: Date;
  valoratrasos: number;
  atrazos: number;
  iniciocredito: Date;
  ultimoabono: Date;
  valorcuota: number;
  diadepago: string;
  abono: number;
  saldo: number;
  plazo: number;
  credito: number;
  fest: number; 
  id : any;
  user_id: any;
  login_id: any;
  anggota: any; 
  username: any;
  token: string;
 

  constructor(
    private postPvdr: PostProvider,
    private router: Router,
    private fcm: FCM,
    public toastController: ToastController,
    private actRoute: ActivatedRoute,
    private storage: Storage,
  ) { }

  

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) => {
      this.idMeta = data.id;     
      this.user = data.user;
      this.nombre = data.name;
      this.direccion = data.direc;
      this.telefono = data.tele;
      this.identificacion = data.identificacion;
      this.codigo = data.codi;
      this.valoratrasos = data.valora;
      this.atrazos = data.atraz;
      this.iniciocredito = data.inicioc;
      this.ultimoabono = data.ultimoa;
      this.valorcuota = data.valorc;
      this.diadepago = data.diade;
      this.abono = data.abon;     
      this.saldo = data.sald;
      this.plazo = data.plazo;
      this.credito = data.credi;
      this.fest = data.fest;
      this.login_id = data.login;
      this.username = data.username;
      this.token = data.toke;
      console.log(data);
      });
    //  this.ionViewWillEnter() ;

      this.fcm.getToken().then((token: string)  => {
        // backend.registerToken(token);
        console.log(token);
        this.token = token;
        
       });
   
       this.fcm.onTokenRefresh().subscribe((token: string) => {
         console.log("actualizacion del tokend " + token);
       });  
  }

 

  ionViewWillEnter() {
    this.customers = [];
    this.upsaldos = [];     
    this.start = 0;
    //this.loadCustomer(this.login_id);
    //this.loadSaldo();
    this.storage.get('session_storage').then((res) => {
      this.anggota = res;
     //this.login_id = this.anggota.login_id;     
     /*  this.user = this.anggota.user;   
      this.telefono = this.anggota.telefono; */
      this.username = this.anggota.username;
      this.identificacion = this.anggota.identificacion;
    });
  }

  

  async updateProses() {
 /*    if (this.name_customer == ''){
      const toast = await this.toastController.create({
        message: 'Customer is required',
        duration: 2000
      });
      toast.present();
    } else if (this.desc_customer == ''){
      const toast = await this.toastController.create({
        message: this.username +  ', Cuentale a ' + this.name_customer + ' de tu transferencia' ,
        duration: 2000
      });
      toast.present();
    } else if (this.monto_customer == null){
      const toast = await this.toastController.create({
        message: 'Ingresa Un Monto Valido',
        duration: 2000
      });
      toast.present();
    }  else if (this.abono == 0){
      const toast = await this.toastController.create({
        message: 'Ingresa Un Monto Valido',
        duration: 2000
      });
      toast.present();
      } else */ {
        
      let body = {   
     
        aksi: 'update',
        idMeta : this.idMeta,
        telefono: this.telefono,
        nombre: this.nombre,
        abono : this.abono,
        saldo : this.saldo,
        iniciocredito : this.iniciocredito,
        codigo : this.codigo,
        valorcuota : this.valorcuota,
        plazo : this.plazo,     
                  
      };
     // if ( this.saldo > this.monto_customer  ) { 
      this.postPvdr.postData(body, 'file_aksi.php').subscribe( async data => {
        var alertpesan = data.msg;          
        if (data.success) {
          this.registrarAbono();
         // this.abono = null ;
         this.router.navigate(['/customer']);
          const toast = await this.toastController.create({
            message: 'Abono Exitoso',
            duration: 2000
       
          });         
          
          console.log(this.abono);
          toast.present();
        } else {
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

  async registrarAbono() {           
         let body = {           
           aksi     : 'updateAbono',          
           idMeta   : this.idMeta,
           user     :this.user,
           nombre   : this.nombre,
           direccion: this.direccion,
           telefono : this.telefono,  
           identificacion : this.identificacion,  
           codigo : this.codigo, 
           valoratrasos : this.valoratrasos,
           atrazos : this.atrazos,
           iniciocredito : this.iniciocredito,
           ultimoabono : this.ultimoabono,
           valorcuota : this.valorcuota,
           diadepago : this.diadepago,
           abono    : this.abono,
           saldo    : this.saldo ,
           plazo : this.plazo,
           credito : this.credito

             
                     
         };
        // if ( this.saldo > this.monto_customer  ) { 
         this.postPvdr.postData(body, 'file_aksi.php').subscribe( async data => {
           var alertpesan = data.msg;    
           if (data.success) {         
          
           this.router.navigate(['/customer']);
            const toast = await this.toastController.create({
              message: 'Abono Exitoso',
              duration: 2000
         
            });         
            
            console.log(this.abono);
            toast.present();
          } else {
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
   

//notificacion del envio

async addNoti() { 
    let body = {    
      aksi: 'Noti0817',           
    /*   login_id: this.login_id,    
      monto_customer: this.monto_customer,
         desc_customer : this.desc_customer,
           username : this.username,
           contact_customer: this.contact_customer,
              // token: this.token
                 */
    };    
    this.postPvdr.postData(body, 'notificaciones.php').subscribe( async data => {
      var alertpesan = data.msg;    
     // this.loadToken() 
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





  async proseslogout() {
    this.storage.clear();
    this.router.navigate(['/login']);
    const toast = await this.toastController.create({
      message: 'Debes Ingresar de nuevo por seguridad',
      duration: 2000
     });
    toast.present();

  }


  doRefresh(event) {
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 500);
  }
  
  //aqui va la funcion para usar el salgo

/*   async RecargaProces(){
    const toast = await this.toastController.create({
      message: 'Revisa Tu Monto',
      duration: 2000
 
    });

    this.monto_customer = null;
    //this.router.navigate(['/customer']);
  }
 */
 /*  async UpinProces(){  
    let body = {    
      aksi: '017834595',      
      monto_customer : this.monto_customer,
     saldo : this.saldo,  
      login_id : this.login_id,               
    };
    this.postPvdr.postData(body, 'file_aksi.php').subscribe( async data => {
      var alertpesan = data.msg;          
      if (data.success) {        
        //this.proseslogout()
        // this.router.navigate(['/customer']);
        const toast = await this.toastController.create({
          message: 'Por Tu Seguridad debes Iniciar de Nuevo ',
          duration: 2000
     
        });     
        
        //console.log(this.contact_customer);
        toast.present();
      } else {
        const toast = await this.toastController.create({
          message: alertpesan,
          duration: 2000
        });  
            }
    
      
    });

  }
 */

    
 /*  loadToken() {
  
    return new Promise(resolve => {
      let body = {
        aksi: 'tokenes',            
      contact_customer: this.contact_customer,
        user_id :this.user_id
       
      };
      //console.log(this.login_id);

      this.postPvdr.postData(body, 'notificaciones.php').subscribe(data => {
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
 */
  
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


}
