import { Component, OnInit } from '@angular/core';

import { ICharacter } from '../../models/character.interface';
import { StudentsService } from '../../services/students.service';

/**
 * Componente para visualizar los estudiantes pendientes
 *
 * @author Jhonier Gaviria M. - Feb. 10-2021
 * @version 0.1.0
 */
@Component({
  selector: 'app-pending-students',
  templateUrl: './pending-students.component.html',
  styleUrls: ['./pending-students.component.scss']
})
export class PendingStudentsComponent implements OnInit {

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
  public students: ICharacter[];

  /**
   * Constructor de la clase
   *
   * @author Jhonier Gaviria M. - Feb. 10-2021
   * @version 0.1.0
   *
   * @param studentsService Servicio para la logica de estudiantes
   */
  constructor(private studentsService: StudentsService) {
    this.orderBy = 'name';
    this.students = [];
  }

  /**
   * @see https://angular.io/guide/lifecycle-hooks
   */
  public ngOnInit(): void {
    this.studentsService.getPendingStudents().subscribe((students: ICharacter[]) => this.students = students);
  }
}
