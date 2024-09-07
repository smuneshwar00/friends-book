import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './shared/services/user-service.service';

@Component({
  selector: 'fb-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  userService = inject(UserService);

  ngOnInit(): void {
    this.userService.getUsersList().subscribe(data => console.log(data));
  }
  
}
