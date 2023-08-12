import {Component, OnInit} from '@angular/core';
import {Student} from "../student"
import {StudentService} from "../student.service";

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

  students : Student[] = [];
  selectedStudentAge: number = 0;
  onSelect(age: number) {
    this.selectedStudentAge = age;
  }

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void { //life cycle hook
    this.getStudents();
  }

  getStudents() {
    // let obj = new StudentService();
    this.students = this.studentService.getStudents();
  }
}
