import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GuestViewComponent } from './components/guest-view/guest-view.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'fb-root',
  standalone: true,
  imports: [RouterOutlet, GuestViewComponent, CommonModule, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
  }
  
}
