import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { CoursesComponent } from './courses/courses';
import { StudentsComponent } from './students/students';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'students', component: StudentsComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'dashboard' },
];
