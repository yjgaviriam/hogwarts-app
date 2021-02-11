import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

/**
 * Obtiene la edad a partir de la fecha de nacimiento o el anio de nacimiento
 * NOTA: En caso de no contar con estos datos se retorna un guion
 *
 * @author Jhonier Gaviria M. - Feb. 09-2021
 * @version 0.1.0
 */
@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  /**
   * @see PipeTransform#transform
   *
   * @param dateOfBirth Fecha de nacimiento
   * @param yearOfBirth Anio de nacimiento
   *
   * @returns La edad del personaje
   */
  transform(dateOfBirth: string, yearOfBirth: number): string {

    // Obtenemos la fecha de nacimiento
    const birthDate = moment(dateOfBirth, 'DD-MM-YYYY');

    // Si puede obtiene la edad con fecha de nacimiento, seguido intenta obtener la edad si tiene anio, finalmente '-' si no tiene datos
    return (birthDate.isValid() ? `${moment().diff(birthDate, 'years')} años` :
      (Number.isInteger(yearOfBirth) ? `${(moment().year() - yearOfBirth)} años` : '-'));
  }
}
