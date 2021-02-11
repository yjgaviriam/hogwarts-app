import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { ICharacter } from '../../models/character.interface';
import { StudentsService } from '../../services/students.service';

/**
 * Modal para registro de solitud a estudiante
 *
 * @author Jhonier Gaviria M. - Feb. 10-2021
 * @version 0.1.0
 */
@Component({
  selector: 'app-add-student-modal',
  templateUrl: './add-student-modal.component.html',
  styleUrls: ['./add-student-modal.component.scss']
})
export class AddStudentModalComponent {

  /**
   * Almacena la fecha actual para el calendario
   */
  // public currentDate: string;

  /**
   * Formulario de solicitud de estudiante
   */
  public form: FormGroup;

  /**
   * Constructor de la clase
   *
   * @author Jhonier Gaviria M. - Feb. 10-2021
   * @version 0.1.0
   *
   * @param dialogRef Referencia para poder devolver data al componente que llamo este modal
   * @param formBuilder Servicio para creacion de formularios reactivos
   * @param studentsService Servicio para la logica de estudiantes
   * @param toastr Servicio para mostrar mensajes
   */
  constructor(
    private dialogRef: MatDialogRef<AddStudentModalComponent>,
    private formBuilder: FormBuilder,
    private studentsService: StudentsService,
    private toastr: ToastrService
  ) {
    this._initializeForm();
  }

  /**
   * Inicializa el formulario para enviar solicitud de estudiante
   *
   * @author Jhonier Gaviria M. - Feb. 10-2021
   * @version 0.1.0
   */
  private _initializeForm(): void {
    this.form = this.formBuilder.group({
      dateOfBirth: ['', [Validators.required]],
      image: ['', [Validators.required]],
      name: ['', [Validators.required]],
      patronus: ['', [Validators.required]]
    });
  }

  /**
   * Realiza el registro de un usuario
   *
   * @author Jhonier Gaviria M. - Feb. 10-2021
   * @version 0.1.0
   *
   * @param event Evento del navegador
   */
  public registerAdmission(event: Event): void {

    // Evitamos el evento por defecto del navegador
    event.preventDefault();

    // Validamos que el formulario este correctamente diligenciado
    if (this.form.valid) {

      // Creamos un objeto con la fecha de nacimiento para procesar en el guardado
      const dateOfBirth = moment(this.form.value.dateOfBirth, 'YYYY-MM-DD');

      // Modificamos el formato de la fecha de nacimiento
      this.form.value.dateOfBirth = dateOfBirth.format('DD-MM-YYYY');

      // Completamos la informacion del estudiante
      const student: ICharacter = { yearOfBirth: dateOfBirth.year(), ...this.form.value };

      // Registramos la solicitud
      this.studentsService.registerAdmission(student);

      // Mostramos el mensaje de registro y cerramos el modal
      this.toastr.success('Solicitud Registrada!');
      this.dialogRef.close(student);
    }
  }
}
