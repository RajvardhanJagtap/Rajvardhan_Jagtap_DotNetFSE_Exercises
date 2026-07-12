import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent implements OnInit {
  courses: Course[] = [];
  featuredCourses: Course[] = [];
  cardTitle = 'Learning dashboard';
  count = 0;
  isVisible = true;
  message = 'Use property binding and event binding to drive the dashboard.';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.featuredCourses = courses.filter((course) => course.featured);
      this.count = courses.length;
    });
  }

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }
}
