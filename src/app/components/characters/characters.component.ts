import { CharactersService } from '../../../app/services/characters.service';
import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../../../app/models/character.interface';

/**
 * Componente para visualizar los personajes
 *
 * @author Jhonier Gaviria M. - Feb. 09-2021
 * @version 0.1.0
 */
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  /**
   * Listado de personajes
   */
  public characters: ICharacter[];

  /**
   * Valor para realizar el filtrado
   */
  public filterBy: string;

  /**
   * Columna por la que se filtra la informacion
   */
  public orderBy: string;
  /**
   * Casa de brujas seleccionada para obtener la informacion
   */
  public witchHouseSelected: string;

  /**
   * Constructor de la clase
   *
   * @author Jhonier Gaviria M. - Feb. 09-2021
   * @version 0.1.0
   *
   * @param charactersService Servicio para la logica de estudiantes
   */
  constructor(private charactersService: CharactersService) {
    this.characters = [];
    this.orderBy = 'name';
    this.witchHouseSelected = 'slytherin';
  }

  /**
   * @see https://angular.io/guide/lifecycle-hooks
   */
  public ngOnInit(): void {
    this.getCharacters();
  }

  /**
   * Obtiene los personajes del api de acuerdo a la casa de brujeria seleccionada
   */
  public getCharacters(): void {
    this.charactersService.getCharacters(this.witchHouseSelected).subscribe((characters: ICharacter[]) => this.characters = characters);
  }
}
