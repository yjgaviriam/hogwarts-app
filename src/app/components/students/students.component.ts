import { AddStudentModalComponent } from 'src/app/modals/add-student-modal/add-student-modal.component';
import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../../../app/models/character.interface';
import { MatDialog } from '@angular/material/dialog';
import { StudentsService } from '../../../app/services/students.service';
import { Router } from '@angular/router';

/**
 * Componente para visualizar los estudiantes
 *
 * @author Jhonier Gaviria M. - Feb. 09-2021
 * @version 0.1.0
 */
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

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
   * @author Jhonier Gaviria M. - Feb. 09-2021
   * @version 0.1.0
   *
   * @param matDialog Servicio para abrir modales con angular material
   * @param router Navegacion en la aplicacion
   * @param studentsService Servicio para la logica de estudiantes
   */
  constructor(private matDialog: MatDialog, private router: Router, private studentsService: StudentsService) {
    this.orderBy = 'name';
    this.students = [];
  }

  /**
   * @see https://angular.io/guide/lifecycle-hooks
   */
  public ngOnInit(): void {
    this.studentsService.getStudents().subscribe((students: ICharacter[]) => this.students = students);
  }

  /**
   * Llama al modal de agregar estudiantes
   */
  public addStudent(): void {
    // Abrimos el modal y le enviamos el valor de la posicion que se encuentra libre
    const dialogRef = this.matDialog.open(AddStudentModalComponent, {
      width: '450px'
    });

    // Al cerrar el modal recargamos si tenemos respuesta
    dialogRef.afterClosed().subscribe((student: ICharacter) => {
      // Si se guardo una nueva solicitud
      if (student) {
        this.students.push(student);
        this.router.navigate(['students-pending']);
      }
    });
  }
}
