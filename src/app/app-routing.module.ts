import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './components/characters/characters.component';
import { HomeComponent } from './components/home/home.component';
import { PendingStudentsComponent } from './components/pending-students/pending-students.component';
import { ProfessorsComponent } from './components/professors/professors.component';
import { StudentsComponent } from './components/students/students.component';

/**
 * Rutas del modulo principal
 */
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'characters', component: CharactersComponent },
  { path: 'home', component: HomeComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students-pending', component: PendingStudentsComponent },
  { path: 'professors', component: ProfessorsComponent }
];

/**
 * Modulo de rutas del modulo principal
 * 
 * @author Jhonier Gaviria M. - Feb. 09-2021
 * @version 0.1.0
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
