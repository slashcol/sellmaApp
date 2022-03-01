import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PostProvider } from '../../providers/post-provider';
import { ToastController, Platform, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';
//import { Socket } from 'ngx-socket-io';
import { tokenKey } from '@angular/core/src/view';
//import { Router,  } from '@angular/router';

import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-aceptar',
  templateUrl: './aceptar.page.html',
  styleUrls: ['./aceptar.page.scss'],
})
export class AceptarPage implements OnInit {
  [x: string]: any;

  customer = false;
  imagen = false;
  textoBuscar : '';
  scheduled = [];

  customers: any = [];
  imagens: any = [];
  customeres: any = [];
  upsaldos: any = [];
  limit: number = 200;
  start: number = 0;
  phone_number: string;
  username: string;
  telefono: string;
  user_id: any;
  saldo: string;
  login_id: any;
  anggota: any;
  identificacion : any;
  name_destinatario : any;
  ident_destinatario : any;
  pendiente: any;
  btnName : any = 'Enrutar';
  flag: any = false;



  constructor(    
    private router: Router,
    private postPvdr: PostProvider,
    public toastController: ToastController,
    private plt: Platform,
    private fcm: FCM,
    //private socket: Socket,
      private localNotifications: LocalNotifications,
      private lalertCtrl: AlertController,
    private storage: Storage,
    public  network: Network,
    public dialog: Dialogs,
    private actRoute: ActivatedRoute,
    private callNumber: CallNumber
  ) { 
    
    
    //notificaciones
    this.plt.ready().then(() => {
      this.localNotifications.on('click').subscribe(res => {
        console.log('click: ', res);
        let msg = res.data ? res.data.mydata : '';
        this.showAlert(res.title, res.text, msg);    
      });

      this.localNotifications.on('trigger').subscribe(res => {
        console.log('trigger: ', res);
        let msg = res.data ? res.data.mydata : '';
        this.showAlert(res.title, res.text, msg);
      });
    });

    

    //conexiones
    this.network.onDisconnect().subscribe(() => 
    {
      this.dialog.alert('No tienes Conexion a Internet')
      
    });
    this.network.onDisconnect().subscribe(() =>{     
      setTimeout(() => {
        this.dialog.alert('Estas Conectado a:'+this.network.type )
      }, 2000);
   });

    setTimeout(() => {
      this.customer = true;
    }, 2000);

    
    
}



ionViewDidLoad(){
  this.UpinProces();

 }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
      this.id = data.user_id;
      this.name_customer = data.name;
      this.desc_customer = data.desc;
      this.contact_customer = data.contact;
      this.name_destinatario = data.namedest;
      this.ident_destinatario = data.ident;
      this.token = data.toke;
          console.log(data);
          
  
      });
     // this.UpinProces();

// conexio SOCKET-IO
//this.socket.connect();


// Notificaciones con FCM 

    this.fcm.getToken().then((token: string)  => {
     // backend.registerToken(token);
     console.log(token);
     this.token = token;
     
    });

    this.fcm.onTokenRefresh().subscribe((token: string) => {
      console.log("actualizacion del tokend " + token);
    });
    

    this.onNotification().subscribe(data => {
      if (data.wasTapped) {
        console.log('estamos en segundo pano' + JSON.stringify(data));
        
      }else{
        console.log('estamos en primer pano' + JSON.stringify(data));

    
          this.localNotifications.schedule({
            id: Math.floor((Math.random() *100) +1),
            title: 'HOLA '+ this.username,
            text: 'Hay algo para ti en primer plano',
            data: { mydata: 'estas en primer plano' },
           // trigger: { in: 5, unit: ELocalNotificationTriggerUnit.SECOND },
            //foreground: true
          });
      
        
      }
    });
this.localNotifications.on("click").subscribe(resultado => {

  console.log(JSON.stringify(resultado));
  

});

/*     this.actRoute.params.subscribe((data: any) =>{
   this.saldo = data.saldo;
        console.log(data);

    }); */
  }

 /*  public continuar(){
    this.navCtrl.setRoot(this.customer);
  }
 */
  ionViewWillEnter() {
    this.fcm.getToken().then((token: string)  => {
      // backend.registerToken(token);
      console.log(token);
      this.token = token;
      
     });

    this.customers = [];
    this.imagens = [];
    this.upsaldos = [];    
    this.start = 0;
   // this.logueo();
    this.loadCustomer(this.login_id);
   // this.loadCustomer_Origina(this.login_id)
    this.loadSaldo();
    this.UpinProces();
    this.loadCustomer_notification(this.login_id);
       this.storage.get('session_storage').then((res) => {
      this.anggota = res;
     this.login_id = this.anggota.login_id; 
      this.user_id = this.anggota.user_id;
      //this.saldo = this.anggota.saldo;
      this.phone_number = this.anggota.phone_number;
      this.username = this.anggota.username;
    });
  }
  

  async proseslogout() {
    this.storage.clear();
    this.router.navigate(['/login']);
    const toast = await this.toastController.create({
      message: 'Saliste con Exito',
      duration: 2000
     });
    toast.present();

  }

 /*  ionViewDidLoad(){

    return new Promise(resolve => {
      let body = {
        aksi: '456578980' ,        
        
       // saldo : this.saldo
       
      };
      console.log(this.login_id);

      this.postPvdr.postData(body, 'file_aksi.php').subscribe(data => {
        if(data.result) {
          for(let customer of data.result) {
           this.customers.push(customer)
          if (data.success) {
         // this.storage.set('session_storage', data.result);
          this.scheduleNotification();
          console.log(data);
           }else {
           console.log('hay algo para mostrar para mostrar');
           
           this.scheduleNotification()
          } 
          
           
        }
        }
      
        resolve(true);
      });
     
    });
  } */
 


  async UpinProces(){  
/*     this.fcm.getToken().then((_token: string)  => {
      // backend.registerToken(token);
      //console.log(token);    
     });    */
    let body = {    
      aksi: '11223344556677',      
      //monto_customer : this.monto_customer,
     //saldo : this.saldo,  
      user_id : this.user_id,  
      token: this.token
    };
    this.postPvdr.postData(body, 'file_aksi.php').subscribe( async data => {
      var alertpesan = data.msg;                 
      
      
    });

  }

  

/*   ionViewDidLoad(){
let desconectar = this.network.onDisconnect().subscribe(() => {
  console.log('No hay Conexion a Internet');
  
});
let conectar = this.network.onDisconnect().subscribe(() =>{
  console.log('Ahora si estas conectado');
  setTimeout(()=> {
    
    if(this.network.type == 'wifi'){
      console.log('estas por wifi');
    }
    if(this.network.type == 'ethernet'){
      console.log('estas por Eternet');
    }
    if(this.network.type == 'cellular'){
      console.log('estas por celular');
    }
   
    


  }, 3000);
});

  } */

/* logueo(){
  this.storage.get('session_storage').then((res) => {
  
      this.router.navigate(['/customer']);    
  });
}
 */
  addCustomer() {
    this.router.navigate(['/addcontact']);
  }

 
  colores(id, name, desc, contact, login, username, identificacion) {
    this.router.navigate(['/transfer/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login + '/' + username + '/' + identificacion]);
  }

  updateCustomer(id, user, name, direc, tele, identificacion, codi, valora, atraz, inicioc, ultimoa, valorc, diade, abon, sald, plazo, credi, fest ) {
    this.router.navigate(['/updatecustomer/' + id + '/' + user + '/' + name + '/' + direc + '/' + tele  + '/' + identificacion + '/' + codi + '/' + valora + '/'  + atraz +  '/' + inicioc  +  '/' + ultimoa + '/' + valorc  + '/' + diade +  '/' + abon  + '/' + sald +  '/' + plazo +  '/' + credi  + '/' + fest]);
  }

 
  showCustomer(id, user, name, direc, tele, identificacion, codi, valora, atraz, inicioc, ultimoa, valorc, diade, abon, sald, plazo, credi, fest ) {
    this.router.navigate(['/showcustomer/'  + id + '/' + user + '/' + name + '/' + direc + '/' + tele  + '/' + identificacion + '/' + codi + '/' + valora + '/'  + atraz +  '/' + inicioc  +  '/' + ultimoa + '/' + valorc  + '/' + diade +  '/' + abon  + '/' + sald +  '/' + plazo +  '/' + credi  + '/' + fest]);
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 1500);
  }

  loadData(event: any) {
    this.start += this.limit;
    setTimeout(() => {
    this.loadCustomer(this.login_id).then(() => {
    event.target.complete();
    });
    },1500);
  }


  delCustomer(id) {
    let body = {
        aksi: 'delete',
        customer_id : id
      };

    this.postPvdr.postData(body, 'file_aksi.php').subscribe(_data => {
             this.ionViewWillEnter();
             
      });
  }

  //este es el original... el otro es de prueba

  loadCustomer_Origina(_login_id) {
  
    return new Promise(resolve => {
      let body = {
        aksi: 'getdata' ,        
        contact_customer : this.contact_customer,
        user_id : this.user_id, 
        login_id : this.login_id,
        identificacion: this.identificacion

       // saldo : this.saldo|
       
      };
      //console.log(this.login_id);

      this.postPvdr.postData(body, 'file_aksi.php').subscribe(data => {
        if(data.result) {
          for(let imagen of data.result) {
           this.imagens.push(imagen)
          /*  if (data.success) {
           // this.storage.set('session_storage', data.result);
            this.scheduleNotification();
            console.log(data);
           }else {
           console.log('nada que mostrar');
           
           this.scheduleNotification()
          } */
          
           
        }
        }
      
        resolve(true);
      });
     
    });
    
  }

  actionBtn(){
    this.flag = true;

  }


  reorder( event ){

    console.log(event);

    const itemMover = this.customeres.splice( event.detail.from, 1 )[0];
    this.customeres.splice( event.detail.to,  0, itemMover );
   /*  this.storage.set('session_storage', this.customers);
 */
    event.detail.complete();

  }

  loadCustomer(_login_id) {
  
    return new Promise(resolve => {
      let body = {
        aksi: 'getdata_prueba_todos' ,        
        limit : this.limit,
        start : this.start,
        user_id : this.user_id, 
        login_id : this.login_id,
        identificacion: this.identificacion

       // saldo : this.saldo|
       
      };
      //console.log(this.login_id);

      this.postPvdr.postData(body, 'file_aksi.php').subscribe(data => {
        if(data.result) {
          for(let customer of data.result) {
           this.customers.push(customer)
          /*  if (data.success) {
           // this.storage.set('session_storage', data.result);
            this.scheduleNotification();
            console.log(data);
           }else {
           console.log('nada que mostrar');
           
           this.scheduleNotification()
          } */
          
           
        }
        }
      
        resolve(true);
      });
     
    });
    
  }


  
  llamada(){
    this.callNumber.callNumber(this.customer[4], true)
    .then(() => console.log('Llamada exitosa!'))
    .catch(() => console.log('Error al intentar llamar'));
    console.log(this.customer[4]);
    
 
}

  
  loadCustomer_notification(_login_id) {
    
      return new Promise(resolve => {
        let body = {
          aksi: '456578980' ,        
          limit : this.limit,
          start : this.start,
          user_id : this.user_id, 
          login_id : this.login_id,
          identificacion : this.identificacion,
          name_destinatario : this.name_destinatario,
          ident_destinatario : this.ident_destinatario,
          pendiente : this.pendiente
         // saldo : this.saldo
         
        };
        console.log(this.login_id);
  
        this.postPvdr.postData(body, 'file_aksi.php').subscribe(data => {
          if(data.result) {
            for(let customer of data.result) {
             this.customers.push(customer)
            if (data.success) {
           // this.storage.set('session_storage', data.result);
            this.scheduleNotification();
            console.log(data);
             }else {
             console.log('hay algo para mostrar para mostrar');
             
             this.scheduleNotification()
            } 
            
             
          }
          }
        
          resolve(true);
        });
       
      });
    }
   
 
/*   colores(id, name, desc, contact, login, username, identificacion) {
    this.router.navigate(['/transfer/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login  + '/' + username + '/' + identificacion]);
  } */

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
            this.UpinProces();
           this.upsaldos.push(upsaldo)
          
           
        }
        }
        console.log(this.saldo);
        resolve(true);
      });
     
    });
    
  }

  buscar(event){
    this.textoBuscar = event.detail.value;
     }

     showAlert(header, sub, msg){
      this.lalertCtrl.create({
        header: header,
        subHeader: sub,
        message: msg,
        buttons: ['OK']
    
      }).then(alert => alert.present());     
        }

        scheduleNotification(){
          this.localNotifications.schedule({
            id: 1,
            title: 'HOLA '+ this.username,
            text: 'Hay algo para ti ',
            data: { mydata: 'Revisa lo que te ha llegado' },
            trigger: { in: 5, unit: ELocalNotificationTriggerUnit.SECOND },
            //foreground: true
          });
      
        }

  
}
