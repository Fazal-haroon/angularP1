import {Component, OnInit} from '@angular/core';
import {Student} from "../student"
import {STUDENTS} from "../student-records";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{
  student = "student1";

  student1: Student = {
    id: 1,
    name: "Google",
    age: 60
  };

  students = STUDENTS;
  selectedStudentAge: number = 0;
  onSelect(age: number) {
    this.selectedStudentAge = age;
  }

  constructor() {
  }

  ngOnInit(): void { //life cycle hook
  }
}
