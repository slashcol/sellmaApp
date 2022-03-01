import { Injectable } from '@angular/core';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PostImagenService {
  stack_aux: any[] = [];
  formulario: FormData;

  constructor(private file: File, private platform: Platform) {
      
  }

  public getFormulario(fotos: string[]): Promise<any>{
    let promesa = new Promise((resolve, reject) => {
      this.formulario = new FormData();
      this.stack_aux = [];

      if(this.platform.is('cordova')){

        if(this.platform.is('ios')){

          for (let i = 0; i < fotos.length; i++) {

            this.file.resolveLocalFilesystemUrl("file://" + fotos[i])
            .then((entry) =>
                (<FileEntry>entry).file(file =>  {

                    const reader = new FileReader();

                    reader.onload = (data) => {

                        console.log("Entre");

                        const imgBlob = new Blob([reader.result], { type: file.type });
                        this.formulario.append('foto' + (i+1), imgBlob, file.name);




                        this.stack_aux.push('foto' + (i+1));
                        if(this.stack_aux.length == fotos.length)
                          resolve(this.formulario);



                    };
                    reader.readAsArrayBuffer(file);
            })).catch( err =>{
                    reject(err)
                })
            .catch( err =>
                reject(err)
            );
          }

        }

        if(this.platform.is('android')){

          for (let i = 0; i < fotos.length; i++){

              this.file.resolveLocalFilesystemUrl(fotos[i])
              .then((entry) =>
                  (<FileEntry>entry).file(file =>  {
                      const reader = new FileReader();
                      reader.onload = (data) => {


                          console.log("Entre");

                          const imgBlob = new Blob([reader.result], { type: file.type });
                          this.formulario.append('foto' + (i+1), imgBlob, file.name);



                          this.stack_aux.push('foto' + (i+1));
                          if(this.stack_aux.length == fotos.length)
                            resolve(this.formulario)



                      };
                      reader.readAsArrayBuffer(file);
              })).catch( err =>{
                      reject(err)
                  })
              .catch( err =>
                  reject(err)
              );

          }


        }
      }else{
        reject(false);
      }
    });

    return promesa;
  }

}