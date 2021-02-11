/**
 * Interfaz representativa de la informacion de un estudiante
 *
 * @author Jhonier Gaviria M. - Feb. 09-2021
 * @version 0.1.0
 */
export interface ICharacter {

    /**
     * Fecha de nacimiento del estudiante
     */
    dateOfBirth: number;

    /**
     * Url de la imagen del estudiante
     */
    image: string;

    /**
     * Nombre del estudiante
     */
    name: string;

    /**
     * Tipo de encantamiento
     */
    patronus: string;

    /**
     * Anio de nacimiento del estudiante en caso de no tener la fecha de nacimiento completa
     */
    yearOfBirth: number;
}
