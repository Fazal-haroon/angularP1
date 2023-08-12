import {Component, OnInit} from '@angular/core';
import {Student} from "../student"

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{

  student = "student1";

  student1: Student = {
    id: 1,
    name: "Google"
  };

  constructor() {
  }

  ngOnInit(): void { //life cycle hook
  }

}
