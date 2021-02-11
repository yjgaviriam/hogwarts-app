import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICharacter } from '../models/character.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

/**
 * Controla la logica para los estudiantes de la escuela
 *
 * @author Jhonier Gaviria M. - Feb. 09-2021
 * @version 0.1.0
 */
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  /**
   * Constructor de la clase
   *
   * @author Jhonier Gaviria M. - Feb. 09-2021
   * @version 0.1.0
   *
   * @param httpClient Servicio para realizar peticiones http
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * Obtiene los estudiantes que han solicitado registro del localstorage
   *
   * @author Jhonier Gaviria M. - Feb. 10-2021
   * @version 0.1.0
   *
   * @returns Un array con la informacion ya guardada
   */
  private _getPendingStudents(): ICharacter[] {
    return localStorage.getItem('__peding__students__') ? JSON.parse(localStorage.getItem('__peding__students__')) : [];
  }

  /**
   * Obtiene los estudiantes que han solicitado el registro
   *
   * @author Jhonier Gaviria M. - Feb. 10-2021
   * @version 0.1.0
   *
   * @returns Un observable con los datos
   */
  public getPendingStudents(): Observable<ICharacter[]> {
    return of(this._getPendingStudents());
  }

  /**
   * Realiza la consulta de estudiantes de la escuela al api
   *
   * @author Jhonier Gaviria M. - Feb. 09-2021
   * @version 0.1.0
   *
   * @returns Un observable con los datos
   */
  public getStudents(): Observable<ICharacter[]> {
    return this.httpClient.get<ICharacter[]>(`${environment.baseUrl}characters/students`);
  }

  /**
   * Se encarga de agregar una nueva solicitud de estudiante a las existentes en el local storage
   *
   * @author Jhonier Gaviria M. - Feb. 09-2021
   * @version 0.1.0
   *
   * @param pendingStudent La nueva solicitud
   */
  public registerAdmission(pendingStudent: ICharacter): void {

    // Construimos el arreglo para guardar en el local storage
    const pendingStudents = [...this._getPendingStudents(), pendingStudent];

    // Se guarda los estudiantes
    localStorage.setItem('__peding__students__', JSON.stringify(pendingStudents));
  }
}
