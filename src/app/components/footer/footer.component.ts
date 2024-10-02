import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'fb-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  currentYear = new Date().getFullYear()
}
