import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { async } from 'q';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.page.html',
  styleUrls: ['./addcustomer.page.scss'],
})
export class AddcustomerPage implements OnInit {

  customers: any = [];
  limit: number = 10;
  start: number = 0;
  
  username: string;
  user_id: any;
  anggota: any;

  name_customer: string = '';
  desc_customer: string = '';
  contact_customer: string = '';
  phone_customer: string = '' ;
  id: number;

  constructor(
    private postPvdr: PostProvider,
    private router: Router,
    public toastController: ToastController,
    private actRoute: ActivatedRoute,
    private storage: Storage,
  ) { }

  ngOnInit() {
   
  }
  ionViewWillEnter() {
    this.customers = [];
    this.start = 0;
    this.loadCustomer();
    this.storage.get('session_storage').then((res) => {
      this.anggota = res;
             this.user_id = this.anggota.user_id;
      this.username = this.anggota.username;
    });
  }

  loadCustomer() {
    return new Promise(resolve => {
      let body = {
        aksi: 'getdata',
        limit : this.limit,
        start : this.start,
      };

      this.postPvdr.postData(body, 'file_aksi.php').subscribe(data => {
        for (let customer of data.result) {
          this.customers.push(customer);
        }
        resolve(true);
      });
    });
  }

  async createdProses() {
    if (this.name_customer == '') {
      const toast = await this.toastController.create({
        message: 'Customer name is required',
        duration: 2000
      });
      toast.present();
   
    } else {
      let body = {
        aksi: 'add',
        name_customer : this.name_customer,
        desc_customer : this.desc_customer,
        contact_customer : this.contact_customer,
        
        login_id : this.user_id,
        username : this.username
      };
      this.postPvdr.postData(body, 'file_aksi.php').subscribe( async data => {
        var alertpesan = data.msg;
        if (data.success) {
          this.router.navigate(['/customer']);
          const toast = await this.toastController.create({
            message: 'Contacto Agregado',
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

  async updateProses() {
    if (this.name_customer == ''){
      const toast = await this.toastController.create({
        message: 'Customer is required',
        duration: 2000
      });
      toast.present();
    } else if (this.desc_customer == ''){
      const toast = await this.toastController.create({
        message: 'Description is required',
        duration: 2000
      });
      toast.present();
    } else {
      let body = {
        aksi: 'update',
        customer_id : this.id,
        name_customer : this.name_customer,
        desc_customer : this.desc_customer,
        contact_customer : this.contact_customer,
      };
      this.postPvdr.postData(body, 'file_aksi.php').subscribe( async data => {
        var alertpesan = data.msg;
        if (data.success) {
          this.router.navigate(['/customer']);
          const toast =await this.toastController.create({
            message: 'Data updated successful',
            duration: 2000
          });
          toast.present();
        } else {
          const toast =await this.toastController.create({
            message: alertpesan,
            duration: 2000
          });
        }
      });


    }
  }
}
