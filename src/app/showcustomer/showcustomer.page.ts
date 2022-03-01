import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-showcustomer',
  templateUrl: './showcustomer.page.html',
  styleUrls: ['./showcustomer.page.scss'],
})
export class ShowcustomerPage implements OnInit {

  name_customer: string;
  desc_customer: string;
  contact_customer: string;
  customer = false;


  customers: any = [];
  upsaldos: any = [];
  limit: number = 10;
  start: number = 0;
  idMeta: number;
  user: string = '';
  nombre: string = '';
  direccion: string = '';
  telefono: any;
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
    private router: Router,
    private postPvdr: PostProvider,
    private storage: Storage,
    private actRoute: ActivatedRoute,
    private callNumber: CallNumber
  ) {
    setTimeout(() => {
      this.customer = true;
    }, 3000);
   }
   doRefresh(event) {
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 1500);
  }



  ionViewWillEnter() {
    this.customers = [];
    this.upsaldos = [];    
    this.start = 0;
    this.loadCustomer(this.login_id);    
    this.storage.get('session_storage').then((res) => {
      this.anggota = res;
      this.login_id = this.anggota.login_id;
      this.user_id = this.anggota.user_id;
    /*   this.identificacion = this.anggota.identificacion; */
      //this.saldo = this.anggota.saldo;
     // this.telefono = this.anggota.telefono;
      this.username = this.anggota.username;
    });
  }




   ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
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
  }

  loadData(event: any) {
    this.start += this.limit;
    setTimeout(() => {
    this.loadCustomer(this.login_id).then(() => {
    event.target.complete();
    });
    },1500);
  }



  loadCustomer(login_id) {
  
    return new Promise(resolve => {
      let body = {
        aksi: 'gettransfer' ,        
        limit : this.limit,
        start : this.start,
        user_id : this.user_id, 
        login_id : this.login_id,
        contact_customer : this.contact_customer
     
       // saldo : this.saldo
       
      };
      //console.log(this.login_id);

      this.postPvdr.postData(body, 'file_aksi.php').subscribe(data => {
        if(data.result) {
          for(let customer of data.result) {
           this.customers.push(customer)
          
           
        }
        }
      
        resolve(true);
      });
     
    });
  }

    
  llamada(){
    this.callNumber.callNumber(this.telefono, true)
    .then(() => console.log('Llamada exitosa!'))
    .catch(() => console.log('Error al intentar llamar'));
    console.log(this.telefono);
    
 
}

}
