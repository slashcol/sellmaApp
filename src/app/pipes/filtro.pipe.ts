import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string): any[] {

    if ( texto === '' ){
      return arreglo;
    }

//texto = texto.toLowerCase();

return arreglo.filter( item => {

return item.name_customer.toLowerCase()
          .includes( texto );

})

   
  }

}
