// NgRx actions for course state management.
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Course } from '../models/course';

export const CourseActions = createActionGroup({
  source: 'Course',
  events: {
    loadCourses: emptyProps(),
    loadCoursesSuccess: props<{ courses: Course[] }>(),
    loadCoursesFailure: props<{ error: string }>(),
    addCourse: props<{ course: Course }>(),
    addCourseSuccess: props<{ course: Course }>(),
    addCourseFailure: props<{ error: string }>(),
    deleteCourse: props<{ id: number }>(),
    deleteCourseSuccess: props<{ id: number }>(),
    deleteCourseFailure: props<{ error: string }>(),
  },
});
