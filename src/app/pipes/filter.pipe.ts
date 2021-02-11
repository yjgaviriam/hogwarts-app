import { Pipe, PipeTransform } from '@angular/core';

/**
 * Filtra los elementos de acuerdo al parametro recibido
 *
 * @author Jhonier Gaviria M. - Feb. 10-2021
 * @version 0.1.0
 */
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  /**
   * @see PipeTransform#transform
   *
   * @param items Arreglo a filtrar
   * @param column Parametro de filtrado
   *
   * @returns El arreglo ordenado
   */
  transform(items: any[], search: string): any[] {

    // Si no tiene valor retornamos el arreglo tal cual
    if (search === null || (typeof (search) === 'undefined')) {
      return items;
    }

    // Variables para procesar la respuesta
    const response = [];
    search = search.toLowerCase();

    // Filtramos los items
    for (const item of items) {
      if (item.name.toLowerCase().includes(search) || item.patronus.toLowerCase().includes(search)) {
        response.push(item);
      }
    }

    return response;
  }

}
