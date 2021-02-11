import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ICharacter } from '../models/character.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorsService {

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
   * Realiza la consulta de estudiantes de la escuela al api
   *
   * @author Jhonier Gaviria M. - Feb. 09-2021
   * @version 0.1.0
   *
   * @returns Un observable con los datos
   */
  public getProfessors(): Observable<ICharacter[]> {
    return this.httpClient.get<ICharacter[]>(`${environment.baseUrl}characters/staff`);
  }
}
