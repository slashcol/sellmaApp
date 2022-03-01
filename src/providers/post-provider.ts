import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostProvider {
   
    server: string = 'http://sellmatech.biz/01231230/app/';

    //server: string = 'http://localhost/ionic4login/server_api/';
    dominio: string = 'http://sellmatech.biz/01231230/app/';

    constructor(public http: Http) {

    }

    postData(body, file){
        let type = 'application/json; charset=UTF-8';
        let headers = new Headers({ 'Content-Type': type });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.server + file, JSON.stringify(body), options)
        .map(res => res.json());
    }

    public addUser(data:FormData){

        return new Promise((resolve, reject) => {
    
          this.http.post(this.dominio, data).subscribe(resp => {
    
    
    
            resolve(resp.json());
          }, err =>{
    
            reject(err.json());
          });
    
        });
    
      }
}
