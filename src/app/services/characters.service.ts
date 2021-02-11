import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ICharacter } from '../models/character.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Controla la logica para los personajes de la escuela
 *
 * @author Jhonier Gaviria M. - Feb. 09-2021
 * @version 0.1.0
 */
@Injectable({
  providedIn: 'root'
})
export class CharactersService {

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
   * Realiza la consulta de los personajes de la escuela al api
   *
   * @author Jhonier Gaviria M. - Feb. 09-2021
   * @version 0.1.0
   *
   * @param witchHouse Casa de brujeria a traer la informacion
   *
   * @returns Un observable con los datos
   */
  public getCharacters(witchHouse: string): Observable<ICharacter[]> {
    return this.httpClient.get<ICharacter[]>(`${environment.baseUrl}characters/house/${witchHouse}`);
  }
}
