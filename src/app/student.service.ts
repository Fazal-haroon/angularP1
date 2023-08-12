import { Injectable } from '@angular/core';
import {Student} from "./student";
import {STUDENTS} from "./student-records";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents(): Student[]{
    return STUDENTS;
  }
}
