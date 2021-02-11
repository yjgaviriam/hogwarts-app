import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../../../app/models/character.interface';
import { ProfessorsService } from '../../../app/services/professors.service';

/**
 * Componente para visualizar los profesores
 *
 * @author Jhonier Gaviria M. - Feb. 09-2021
 * @version 0.1.0
 */
@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.scss']
})
export class ProfessorsComponent implements OnInit {

  /**
   * Valor para realizar el filtrado
   */
  public filterBy: string;

  /**
   * Columna por la que se filtra la informacion
   */
  public orderBy: string;

  /**
   * Listado de estudiantes
   */
  public professors: ICharacter[];

  /**
   * Constructor de la clase
   *
   * @author Jhonier Gaviria M. - Feb. 09-2021
   * @version 0.1.0
   *
   * @param professorsService Servicio para la logica de profesores
   */
  constructor(private professorsService: ProfessorsService) {
    this.orderBy = 'name';
    this.professors = [];
  }

  /**
   * @see https://angular.io/guide/lifecycle-hooks
   */
  public ngOnInit(): void {
    this.professorsService.getProfessors().subscribe((professors: ICharacter[]) =>  this.professors =  professors);
  }
}
