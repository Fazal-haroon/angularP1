import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import {FormsModule} from "@angular/forms";
import { StudentAgeComponent } from './student-age/student-age.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentAgeComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
