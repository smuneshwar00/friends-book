import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GuestViewComponent } from './components/guest-view/guest-view.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./components/footer/footer.component";
//import { UserService } from './shared/services/user-service.service';

@Component({
  selector: 'fb-root',
  standalone: true,
  imports: [RouterOutlet, GuestViewComponent, CommonModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  //userService = inject(UserService);
  showHeader1 = true;
  showHeader2 = false;

  ngOnInit(): void {
    //this.userService.getUsersList().subscribe(data => console.log(data));
  }
  
}
