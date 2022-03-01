import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';
//import { Router,  } from '@angular/router';



@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.page.html',
  styleUrls: ['./addcontact.page.scss'],
})
export class AddcontactPage implements OnInit {

  

  customer = false;
  textoBuscar : '';

  customers: any = [];
  upsaldos: any = [];
  limit: number = 10;
  start: number = 0;
  phone_number: string;
  username: string;
  user_id: any;
  saldo: string;
  login_id: any;
  anggota: any;

  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    public toastController: ToastController,
    private storage: Storage,
    private actRoute: ActivatedRoute
  ) { 
    setTimeout(() => {
      this.customer = true;
    }, 3000);
}

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
   this.saldo = data.saldo;
        console.log(data);

    });
  }

  ionViewWillEnter() {
    this.customers = [];
    this.upsaldos = [];    
    this.start = 0;
    this.loadCustomer(this.login_id);
    this.loadSaldo();
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
      message: 'Logout successful',
      duration: 2000
     });
    toast.present();

  }



  addCustomer() {
    this.router.navigate(['/addcustomer']);
  }

  updateCustomer(id, name, desc, contact, login, username, identificacion) {
    this.router.navigate(['/updatecustomer/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login  + '/' + username + '/' + identificacion]);
  }

  showCustomer(id, name, desc, contact, login, namedest, ident) {
    this.router.navigate(['/showcustomer/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login + '/'  + namedest + '/' + ident]);
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

    this.postPvdr.postData(body, 'file_aksi.php').subscribe(data => {
             this.ionViewWillEnter();
             
      });
  }

  loadCustomer(login_id) {
  
    return new Promise(resolve => {
      let body = {
        aksi: 'getdata' ,        
        limit : this.limit,
        start : this.start,
        user_id : this.user_id, 
        login_id : this.login_id
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

  colores(id, name, desc, contact, login, username, identificacion) {
    this.router.navigate(['/transfer/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login  + '/' + username + '/' + identificacion]);
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

 buscar(event){
this.textoBuscar = event.detail.value;
 }

  
}
