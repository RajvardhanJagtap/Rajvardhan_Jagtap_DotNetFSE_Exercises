import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  isLoading = false;
  errorMessage = '';
  selectedCourse: Course | null = null;
  courseForm: Course = {
    title: '',
    category: '',
    instructor: '',
    duration: '',
    price: 0,
    description: '',
    featured: false,
    startDate: '',
  };

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.isLoading = true;
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Unable to load courses. Start JSON Server.';
        this.isLoading = false;
      },
    });
  }

  submitCourse(): void {
    if (!this.courseForm.title) {
      return;
    }

    if (this.selectedCourse?.id) {
      this.courseService
        .updateCourse({ ...this.selectedCourse, ...this.courseForm })
        .subscribe(() => {
          this.loadCourses();
          this.resetForm();
        });
      return;
    }

    this.courseService.createCourse(this.courseForm).subscribe(() => {
      this.loadCourses();
      this.resetForm();
    });
  }

  editCourse(course: Course): void {
    this.selectedCourse = course;
    this.courseForm = { ...course };
  }

  deleteCourse(id?: number): void {
    if (!id) {
      return;
    }
    this.courseService.deleteCourse(id).subscribe(() => this.loadCourses());
  }

  resetForm(): void {
    this.selectedCourse = null;
    this.courseForm = {
      title: '',
      category: '',
      instructor: '',
      duration: '',
      price: 0,
      description: '',
      featured: false,
      startDate: '',
    };
  }
}
