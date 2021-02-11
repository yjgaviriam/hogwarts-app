import { ToastrModule } from 'ngx-toastr';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './components/characters/characters.component';
import { PendingStudentsComponent } from './components/pending-students/pending-students.component';
import { ProfessorsComponent } from './components/professors/professors.component';
import { StudentsComponent } from './components/students/students.component';
import { AddStudentModalComponent } from './modals/add-student-modal/add-student-modal.component';
import { SharedModule } from './modules/shared/shared.module';
import { AgePipe } from './pipes/age.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { HomeComponent } from './components/home/home.component';
import { FilterPipe } from './pipes/filter.pipe';

/**
 * Modulo principal
 *
 * @author Jhonier Gaviria M. - Feb. 09-2021
 * @version 0.1.0
 */
@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    StudentsComponent,
    ProfessorsComponent,
    AgePipe,
    AddStudentModalComponent,
    PendingStudentsComponent,
    SortPipe,
    HomeComponent,
    FilterPipe
  ],
  entryComponents: [
    AddStudentModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    SharedModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
