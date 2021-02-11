import { Pipe, PipeTransform } from '@angular/core';

/**
 * Ordena los elementos de acuerdo a la columna indicada
 *
 * @author Jhonier Gaviria M. - Feb. 10-2021
 * @version 0.1.0
 */
@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  /**
   * @see PipeTransform#transform
   *
   * @param items Arreglo a ordenar
   * @param column Nombre de la columna por la que se ordenara
   *
   * @returns El arreglo ordenado
   */
  transform(items: any[], column: string): any[] {

    // Cuando la columna es la edad
    if (column === 'yearOfBirth') {
      return items.sort((a, b) => {
        console.log(a[column]);
        return a[column] < b[column] ? 1 : -1;
      });
    }

    // Filtra la columna indicada
    return items.sort((a, b) => {
      console.log(a[column]);
      return a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1;
    });
  }

}
