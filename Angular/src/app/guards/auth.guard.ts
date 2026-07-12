// Route guard that protects the students page until the user enters a valid name.
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAllowed = localStorage.getItem('portal-access') === 'granted';
    if (!isAllowed) {
      this.router.navigate(['/dashboard']);
    }
    return isAllowed;
  }
}
