import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Student } from '../models/student';
import { ReactiveStudentFormComponent } from './reactive-student-form';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveStudentFormComponent],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class StudentsComponent {
  student: Student = {
    name: '',
    email: '',
    phone: '',
    course: '',
    gender: '',
    address: '',
  };

  submittedStudents: Student[] = [];
  submitted = false;

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      this.submitted = false;
      return;
    }

    this.submittedStudents.push({ ...this.student });
    this.submitted = true;
    localStorage.setItem('portal-access', 'granted');
    form.resetForm();
  }

  resetForm(form: NgForm): void {
    form.resetForm();
    this.submitted = false;
  }
}
