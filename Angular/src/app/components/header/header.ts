import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  title = 'Digital Nurture Student Course Portal';
  subtitle = 'Angular hands-ons in one complete portal';
}
